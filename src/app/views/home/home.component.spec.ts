import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { ApiErrorResponse, Location } from '../../interfaces/broadcast-interface';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
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

  it('should have the default properties', () => {
    component.search();
    expect(component.loading).toBe(true);
  });

});
