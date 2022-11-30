import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  country: string = '';
  countries: Pais[] = [];
  errorMsg: string = '';
  error: boolean = false;

  constructor(private paisService: PaisService) { }

  findCountries(): void {
    const errorMsg: string = this.country;
    this.paisService.findCountries(this.country)
    .subscribe({

      next: (resp) => {
        this.error = false;
        this.countries = resp
      },
      error: () => {
        this.error = true;
        this.errorMsg = errorMsg;
        this.countries = [];
      }
    })
    this.country = '';
  }

}
