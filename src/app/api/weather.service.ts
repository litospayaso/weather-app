import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

/**
 * Services for User  http API
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /**
   * uri of API. In the future we have to set a method depending on environment
   */
  API_URL = environment.API_URL;
  /**
   * Token data to make the querys.
   */
  token = environment.API_KEY;

  /**
   * @ignore
   */
  constructor(
    private httpClient: HttpClient
  ) {
  }
  /**
   * Send a get http request against Nodes API.
   * @param {string} url for get request .
   * @returns http response
   */
  get(url: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}${url}${url.includes('?')?'&':'?'}appid=${this.token}`);
  }
}
