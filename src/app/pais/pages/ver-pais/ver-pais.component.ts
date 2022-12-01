import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  id: string = '';
  error: boolean = false;

  constructor(private route: ActivatedRoute, private paisService: PaisService) { 
    console.log(route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.paisService.findCountry(this.id)
    .subscribe({
      
      next: (res) => {
        this.error = false;
        this.pais = res[0];
      },
      error: () => this.error = true
    })
  }
}
