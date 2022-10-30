import { ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { ApiErrorResponse, Location } from '@interfaces/broadcast-interface';
import { ApiGeneralResponse } from '@interfaces/forecast-interface';
import { Observable } from 'rxjs';

import { ForecastTableComponent } from '@components/forecast-table/forecast-table.component';
import { ForecastComponent } from '@components/forecast/forecast.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import location from '@testData/location.json';
import forecasts from '@testData/forecasts.json';

function getForecast(): Observable<ApiGeneralResponse> {
  return new Observable((subscriber) => {
    subscriber.next({
      forecast: forecasts,
      location: location as unknown as Location
    });
    subscriber.complete();
  });
}

function observableError(): Observable<ApiGeneralResponse> {
  return new Observable((subscriber) => {
    subscriber.error({
      error: {
        cod: 404,
        message: 'error message example'
      }
    });
  });
}




describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, ForecastTableComponent, ForecastComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default properties', () => {
    expect(component).toBeTruthy();
    expect(component.error).toBe(undefined as unknown as ApiErrorResponse);
    expect(component.inputSearch.length).toBe(0);
    expect(component.location).toBe(undefined as unknown as Location);
    expect(component.forecasts.length).toBe(0);
    expect(component.loading).toBe(false);
  });

  it('should change the properties when we call search function', () => {
    component.search();
    expect(component.loading).toBe(true);
  });

  it('should change the properties when we call search function', fakeAsync(() => {
    component.inputSearch = 'Rotterdam';
    component.weatherApiService.getForecast = getForecast;
    component.query();
    tick(2000);
    expect(component.forecasts.length).toBe(40);
    flush();
  }));

  it('should change the properties when we call search function', fakeAsync(() => {
    component.inputSearch = 'Rotterdam';
    component.weatherApiService.getForecast = observableError;
    component.query();
    tick(2000);
    tick(2000);
    expect(component.error.cod).toBe(404);
    expect(component.error.message).toBe('error message example');
    flush();
  }));

});
