import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  country: string = '';

  constructor(private paisService: PaisService) {
    
  }

  get countries(): Pais[] {
    return this.paisService.countries;

  }

  findCountries(name: string): void {
    this.paisService.findCountry(name);
  }

}
