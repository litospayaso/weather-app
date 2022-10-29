import { Injectable } from '@angular/core';
import { WeatherService } from '@api/weather.service';
import { Observable } from 'rxjs';
import { ApiBroadcastResponse } from '@interfaces/broadcast-interface'
import { map } from 'rxjs/operators';
import { ApiGeneralResponse } from '@app/interfaces/forecast-interface';

/**
 * Services weather API
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  /**
   * @ignore
   */
  constructor(
    private weatherService: WeatherService
  ) {
  }
  /**
   * Get the forecast for a city.
   * @param {string} name name of the city to query.
   * @returns http response formatted as forecasts array
   */
  getForecast(name?: string): Observable<ApiGeneralResponse> {
    const request = this.weatherService.get(`/forecast?q=${name}&units=metric`);
    return request.pipe(map(({ city, list }) => {
      return {
        location: city,
        forecast: list.map(e => {
          return {
            dt: e.dt,
            dt_txt: e.dt_txt,
            temp: e.main.temp,
            description: e.weather[0].description,
            icon: e.weather[0].icon
          }
        })
      }
    }));
  }
}
