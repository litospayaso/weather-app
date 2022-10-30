import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { catchError, Observable, Subscriber } from 'rxjs';
import { ApiBroadcastResponse } from '@app/interfaces/broadcast-interface';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Services for weather API
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
   * Send a get http request against OpenWeatherMap api.
   * Here we can track the errors on the Api request.
   * @param {string} url for get request .
   * @returns http response
   */
  get(url: string): Observable<ApiBroadcastResponse> {
    return this.httpClient.get(`${this.API_URL}${url}${url.includes('?') ? '&' : '?'}appid=${this.token}`)
    .pipe(catchError((error: any) => {
      if(error.error.message) {
        return new Observable((subscriber) => subscriber.error(error));
      } else { // tracking errors if API is down
        return new Observable((subscriber) => {
          subscriber.error({
            error: {
              cod: typeof(error.status) === 'number' ? error.status : 500,
              message: error.message || '500 error:Network issues'
            }
          });
        });
      }
    })) as unknown as Observable<ApiBroadcastResponse>;
  }
}
