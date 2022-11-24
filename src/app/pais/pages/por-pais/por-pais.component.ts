import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  country: Pais[] = [];

  constructor(private paisService: PaisService) {
    
  }

  ngOnInit(): void {
  }

  get paises() : Pais[] {
    return this.paisService.countries;
  }

  findCountries(): void {
    this.paisService.findCountry('Esp');
  }

}
