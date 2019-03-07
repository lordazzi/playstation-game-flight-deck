import { Component, OnInit } from '@angular/core';

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

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.search('uncharted', ItemType.GAME, 100).subscribe(
      items => this.items = items,
      err => console.info(err)
    );
  }
}
