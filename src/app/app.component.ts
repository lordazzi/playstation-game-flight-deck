import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { PSItem } from './shared/domain/ps-item.model';
import { PSItemType } from './shared/domain/ps-item-type.enum';
import { SearchService } from './shared/playstation-api/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  items: PSItem[] = [];

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
  }

  search(searchFor: string) {
    this.searchService.search(searchFor, PSItemType.GAME, 100).subscribe(
      items => this.items = items,
      err => console.info(err)
    );
  }
}
