import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiErrorResponse, Location } from '@app/interfaces/broadcast-interface';

import { ForecastTableComponent } from './forecast-table.component';

import forecasts from '@testData/forecasts.json';

describe('ForecastTableComponent', () => {
  let component: ForecastTableComponent;
  let fixture: ComponentFixture<ForecastTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default properties', () => {
    expect(component).toBeTruthy();
    expect(component.error).toBe(undefined as unknown as ApiErrorResponse);
    expect(component.location).toBe(undefined as unknown as Location);
    expect(component.forecasts.length).toBe(0);
    expect(component.sortingDescendant).toBe(true);
    expect(component.showHours).toBe(false);
  });

  it('should change the properties when we call changeSorting', () => {
    component.changeSorting();
    expect(component.showHours).toBe(false);
  });

  it('should return the correct amount of forecast data when we filtered them', () => {
    component.forecasts = forecasts;
    const forecastFiltered = component.filter;
    expect(forecastFiltered.length).toBe(5);
    expect(forecastFiltered[0].dt).toBe(1667142000);
    expect(forecastFiltered[0].dt_txt).toBe('2022-10-30 15:00:00');
    expect(forecastFiltered[0].temp).toBe(16.32);
    expect(forecastFiltered[0].description).toBe('light rain');
    expect(forecastFiltered[0].icon).toBe('10d');

  });

  it('should return the correct amount of forecast data when we filtered them with showHours active', () => {
    component.forecasts = forecasts;
    component.showHours = true;
    const forecastFiltered = component.filter;
    expect(forecastFiltered.length).toBe(40);
  });
  
  it('should return the correct amount of forecast data when we filtered them with ascendant order', () => {
    component.forecasts = forecasts;
    component.sortingDescendant = false;
    const forecastFiltered = component.filter;
    expect(forecastFiltered.length).toBe(5);
    expect(forecastFiltered[0].dt).toBe(1667487600);
    expect(forecastFiltered[0].dt_txt).toBe('2022-11-03 15:00:00');
    expect(forecastFiltered[0].temp).toBe(17.4);
    expect(forecastFiltered[0].description).toBe('overcast clouds');
    expect(forecastFiltered[0].icon).toBe('04d');
  });

  it('should return the correct amount of forecast data when we filtered them with ascendant and showHours active order', () => {
    component.forecasts = forecasts;
    component.sortingDescendant = false;
    component.showHours = true;
    const forecastFiltered = component.filter;
    expect(forecastFiltered.length).toBe(40);
    expect(forecastFiltered[0].dt).toBe(1667487600);
    expect(forecastFiltered[0].dt_txt).toBe('2022-11-03 15:00:00');
    expect(forecastFiltered[0].temp).toBe(17.4);
    expect(forecastFiltered[0].description).toBe('overcast clouds');
    expect(forecastFiltered[0].icon).toBe('04d');
  });

});
