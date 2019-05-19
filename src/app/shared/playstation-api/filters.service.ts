import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FiltersResultSet } from './filters-result-set.interface';
import { FindBoardNameResultSet } from './find-board-name-result-set.interface';
import { PSItem } from '../domain/ps-item.model';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private readonly findFiltersServer = 'https://store.playstation.com/valkyrie-api/pt/BR/19/storefront/';
  private readonly findBoardNameServer = 'https://store.playstation.com/kamaji/api/valkyrie_storefront/00_09_000/user/stores';

  constructor(
    private http: HttpClient
  ) { }

  findFilters(boardName?: string): Observable<PSItem[]> {
    return this.http.get<FiltersResultSet>(
      `${this.findFiltersServer}/${boardName}`
    ).pipe(map(resultSet => this.bffFindFilter(resultSet)));
  }

  private findBoardName(): Observable<string> {
    return this.http.get<FindBoardNameResultSet>(
      `${this.findBoardNameServer}`
    ).pipe(map(resultSet => this.bffFindBoardName(resultSet)));
  }

  private bffFindFilter(resultSet: FiltersResultSet): PSItem[] {
    return [];
  }

  private bffFindBoardName(resultSet: FindBoardNameResultSet): string {
    return resultSet.data.base_url.replace(/^.*\//, '');
  }
}
