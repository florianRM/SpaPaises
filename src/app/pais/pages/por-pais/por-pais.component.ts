import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  countries: Pais[] = [];
  errorMsg: string = '';

  constructor(private paisService: PaisService) { }

  findCountries(country: string): void {
    this.paisService.findCountries(country)
    .subscribe({

      next: (resp) => {
        this.countries = resp
        this.errorMsg = '';
      },
      error: () => {
        this.errorMsg = country;
        this.countries = [];
      }
    })
  }

}
