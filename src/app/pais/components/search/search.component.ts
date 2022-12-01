import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @Output() countryEvent = new EventEmitter<string>();
  country: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitCountry(): void {
    this.countryEvent.emit(this.country);
    this.country = '';
  }

}
