import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  private _country: Pais[] = [];
  id: string = '';

  constructor(private route: ActivatedRoute, private paisService: PaisService) { 
    console.log(route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.findCountry();
  }

  get pais(): Pais {
    return this._country[0];
  }

  findCountry(): void {
    this.paisService.findCountry(this.id)
    .subscribe({
      next: (res) => {
        this._country = res;
        console.log(res)
      }
    })
  }
}
