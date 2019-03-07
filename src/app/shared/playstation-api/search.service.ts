import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../domain/item.model';
import { ItemType } from '../domain/item-type.enum';
import { Observable } from 'rxjs';
import { SearchResultSet } from './search-result-set.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly server = 'https://store.playstation.com/valkyrie-api/pt/BR/19/tumbler-search/uncharted?suggested_size=5&mode=game';

  constructor(
    private http: HttpClient
  ) { }

  search(keyword: string, mode = ItemType.GAME, maxlength = 5): Observable<Item[]> {
    return this.http.get<SearchResultSet>(`${this.server}/${keyword}`, {
      params: {
        suggested_size: String(maxlength),
        mode: String(mode)
      }
    }).pipe(map(resultSet => this.bff(resultSet)));
  }

  private bff(resultSet: SearchResultSet): Item[] {
    const items = [];
    resultSet.included.forEach(someFoundThing => {
      const item = new Item();
      item.id = someFoundThing.id;
      item.type = someFoundThing.type as ItemType;
      item.name = someFoundThing.attributes.name;
      item.thumbBase = someFoundThing.attributes['thumbnail-url-base'] + '?w=150&h=150&bg_color=000000&opacity=100';
      items.push(item);
    });

    return items;
  }
}
