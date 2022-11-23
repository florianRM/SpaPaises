import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private url = 'https://restcountries.com/v3.1/';
  private countries: Pais[] = [];

  constructor(private http: HttpClient) { }

  findCountry(countryName: string): Pais[] {
    this.http.get<Pais[]>(`${this.url}name/${countryName}`)
    .subscribe( resp => this.countries = resp);
    return this.countries;
  }
}
