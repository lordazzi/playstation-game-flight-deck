import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PSItemType } from '../domain/ps-item-type.enum';
import { PSItem } from '../domain/ps-item.model';
import { SearchResultSet } from './search-result-set.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly server = 'https://store.playstation.com/valkyrie-api/pt/BR/19/tumbler-search/';

  constructor(
    private http: HttpClient
  ) { }

  search(keyword: string, mode = PSItemType.GAME, maxlength = 5): Observable<PSItem[]> {
    return this.http.get<SearchResultSet>(`${this.server}/${keyword}`, {
      params: {
        suggested_size: String(maxlength),
        mode: String(mode)
      }
    }).pipe(map(resultSet => this.bff(resultSet)));
  }

  private bff(resultSet: SearchResultSet): PSItem[] {
    const items = [];
    resultSet.included.forEach(someFoundThing => {
      const item = new PSItem();
      item.id = someFoundThing.id;
      item.type = someFoundThing.type as PSItemType;
      item.name = someFoundThing.attributes.name;
      item.thumbBase = someFoundThing.attributes['thumbnail-url-base'] + '?w=150&h=150&bg_color=000000&opacity=100';
      items.push(item);
    });

    return items;
  }
}
