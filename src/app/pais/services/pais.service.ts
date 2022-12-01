import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { HttpClient } from '@angular/common/http'
import { Observable, find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private url = 'https://restcountries.com/v3.1/'

  constructor(private http: HttpClient) { }

  findCountries(countryName: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}name/${countryName}`)
  }

  findCountry(countryId: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}alpha/${countryId}`);
  }

  findCountryByCapital(capital: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}capital/${capital}`);
  }
}
