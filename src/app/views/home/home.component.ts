import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '@app/api/weather-api.service';
import { Forecast } from '@app/interfaces/forecast-interface';
import { Location, ApiErrorResponse } from '@interfaces/broadcast-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'home-container'
  }
})
export class HomeComponent implements OnInit {

  private searchTimer: ReturnType<typeof setTimeout>;
  public inputSearch: string = '';
  public location: Location = undefined as unknown as Location;
  public forecasts: Forecast[] = [];
  public error: ApiErrorResponse = undefined as unknown as ApiErrorResponse;
  public loading: boolean = false;

  constructor(
    private weatherApiService: WeatherApiService
  ) {
    this.searchTimer = setTimeout(() => null, 0);
  }

  ngOnInit(): void {
  }

  public search(): void {
    this.loading = true;
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      if (this.inputSearch) {
        this.weatherApiService.getForecast(this.inputSearch).subscribe({
          next: ({ location, forecast }) => {
            console.log(`%c forecast`, `background: #df03fc; color: #f8fc03`, forecast);
            this.error = undefined as unknown as ApiErrorResponse;
            this.location = location;
            this.forecasts = forecast;
            this.loading = false;
          },
          error: ({ error }: HttpErrorResponse) => {
            this.error = error;
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
    }, 800);
  }

}
