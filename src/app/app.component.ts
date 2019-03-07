import { Component, OnInit } from '@angular/core';

import { SearchService } from './shared/playstation-api/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'playstation-game-flight-deck';

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.search('uncharted').subscribe(
      (data) => document.write(JSON.stringify(data)),
      err => console.info(err)
    );
  }
}
