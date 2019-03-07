import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule
  ],

  providers: [
    SearchService
  ]
})
export class PlaystationApiModule { }
