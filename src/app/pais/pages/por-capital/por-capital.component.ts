import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  countries: Pais[] = [];
  errorMsg: string = '';

  constructor(private paisService: PaisService) { }

  findCountry(country: string): void {
    this.paisService.findCountryByCapital(country)
    .subscribe({

      next: (resp) => {
        this.countries = resp;
        this.errorMsg = '';
      },
      error: () => {
        this.errorMsg = country
        this.countries = [];
      }
    })
  }

}
