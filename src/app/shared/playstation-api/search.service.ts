import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemType } from '../domain/item-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly server = 'https://store.playstation.com/valkyrie-api/pt/BR/19/tumbler-search/uncharted?suggested_size=5&mode=game';

  constructor(
    private http: HttpClient
  ) { }

  search(keyword: string, mode = ItemType.GAME, maxlength = 5) {
    return this.http.get(`${this.server}/${keyword}`, {
      params: {
        suggested_size: String(maxlength),
        mode: String(mode)
      }
    });
  }


}
