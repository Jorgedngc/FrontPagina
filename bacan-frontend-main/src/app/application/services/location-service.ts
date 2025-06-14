import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Country} from '../../domain/location/country';
import {District} from '../../domain/location/district';
import {Province} from '../../domain/location/province';
import {State} from '../../domain/location/state';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly httpClient: HttpClient;
  private readonly baseUrl: string;

  constructor() {
    this.httpClient = inject(HttpClient);
    this.baseUrl = environment.ENDPOINT.MS_LOCATION;
  }

  getAllCountries(): Observable<Country[]> {
    const url: string = `${this.baseUrl}/country`;
    return this.httpClient.get<Country[]>(url);
  }

  getAllDistricts(provinceId: string, stateId: string): Observable<District[]> {
    const url: string = `${this.baseUrl}/district/province/${provinceId}/state/${stateId}`;
    return this.httpClient.get<District[]>(url);
  }

  getAllProvinces(stateId: string): Observable<Province[]> {
    const url: string = `${this.baseUrl}/province/state/${stateId}`;
    return this.httpClient.get<Province[]>(url);
  }

  getAllStates(countryId: number): Observable<State[]> {
    const url: string = `${this.baseUrl}/state/country/${countryId}`;
    return this.httpClient.get<State[]>(url);
  }
}
