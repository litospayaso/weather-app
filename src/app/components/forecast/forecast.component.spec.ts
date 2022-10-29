import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forecast } from '@app/interfaces/forecast-interface';

import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default properties', () => {
    expect(component).toBeTruthy();
    expect(component.forecast).toBe(undefined as unknown as Forecast);
    expect(component.showHours).toBe(true);
  });

});
