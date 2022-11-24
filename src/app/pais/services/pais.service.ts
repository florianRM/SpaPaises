import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private url = 'https://restcountries.com/v3.1/'
  private _countries: Pais[] = [];

  constructor(private http: HttpClient) { }

  get countries(): Pais[] {
    return [...this._countries]
  }

  findCountry(countryName: string): void {
    this.http.get<Pais[]>(`${this.url}name/${countryName}`)
    .subscribe( resp => this._countries = resp);
  }
}
