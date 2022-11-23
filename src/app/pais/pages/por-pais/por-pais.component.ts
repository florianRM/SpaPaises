import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  get findCountries(): Pais[] {
    return this.paisService.findCountry('Esp');
  }
}
