import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Item } from './shared/domain/item.model';
import { ItemType } from './shared/domain/item-type.enum';
import { SearchService } from './shared/playstation-api/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  items: Item[] = [];

  @ViewChild('searchInput')
  searchInput: ElementRef;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    //  FIXME: criar serviço de tick
    setTimeout(() => {
      const initialSearch = location.search.replace(/^.*q=/, '');
      if (initialSearch) {
        this.searchInput.nativeElement.value = initialSearch;
        this.search(initialSearch);
      }
    });

    // javascript:!function(){let xhr;xhr = new XMLHttpRequest();xhr.open('POST', 'https://store.playstation.com/kamaji/api/valkyrie_storefront/00_09_000/gateway/store/v1/users/me/notification/download', false);xhr.setRequestHeader('accept', '*/*');xhr.setRequestHeader('content-type', 'application/json');xhr.send(JSON.stringify({"notifications":[{"clientId":1,"platformString":"ps4","entitlementId":"UP2124-CUSA00498_00-THEWITNESSPS4PS4"}]}));}();
  }

  search(searchFor: string) {
    this.searchService.search(searchFor, ItemType.GAME, 100).subscribe(
      items => this.items = items,
      err => console.info(err)
    );
  }
}
