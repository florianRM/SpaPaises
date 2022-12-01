import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {

  @Input() errorMsg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
