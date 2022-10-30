import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '@app/api/weather-api.service';
import { Forecast } from '@app/interfaces/forecast-interface';
import { Location, ApiErrorResponse } from '@interfaces/broadcast-interface';

/**
 * Home page component
 */
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'home-container'
  }
})
export class HomeComponent implements OnInit {

  /**
   * Var for set a timer while the user types and send only one request
   */
  private searchTimer: ReturnType<typeof setTimeout>;
  /**
   * Var for handle the input search
   */
  public inputSearch: string = '';
  /**
   * Var for store location from the Api request
   */
  public location: Location = undefined as unknown as Location;
  /**
   * Var for store forecasts from the Api request
   */
  public forecasts: Forecast[] = [];
  /**
   * Var for handle the error from Api request
   */
  public error: ApiErrorResponse = undefined as unknown as ApiErrorResponse;
  /**
   * Var for display the loading spinner while the request is sent
   */
  public loading: boolean = false;

  /**
   * @ignore
   */
  constructor(
    public weatherApiService: WeatherApiService
  ) {
    this.searchTimer = setTimeout(() => null, 0);
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
  
  /**
   * Function to handle user input search and make only one query
   */
  public search(): void {
    this.loading = true;
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.query(), 800);
  }

  /**
   * Function make query against the Api and handle the response
   */
   public query() {
    if (this.inputSearch) {
      this.weatherApiService.getForecast(this.inputSearch).subscribe({
        next: ({ location, forecast }) => {
          this.error = undefined as unknown as ApiErrorResponse;
          this.location = location;
          this.forecasts = forecast;
          this.loading = false;
        },
        error: ({ error }: HttpErrorResponse) => {          
          this.error = error.message ? error : {cod: 500, message:'500 error: Network issues'};
          this.forecasts = [];
          this.location = undefined as unknown as Location
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
      this.error = undefined as unknown as ApiErrorResponse;
      this.forecasts = [];
      this.location = undefined as unknown as Location
    }
  }
}
