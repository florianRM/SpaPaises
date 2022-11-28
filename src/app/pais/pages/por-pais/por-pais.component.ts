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

  constructor(private paisService: PaisService) { }

  findCountries(): void {
    this.paisService.findCountries(this.country)
    .subscribe({

      next: (resp) => {
        this.errorMsg = '';
        this.countries = resp
      },
      error: () => {
        this.errorMsg = this.country;
      }
    }
    )
  }

}
