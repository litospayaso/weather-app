import {ForecastComponent} from '@components/forecast/forecast.component';
import {ForecastTableComponent} from '@components/forecast-table/forecast-table.component';
import { IconPipe } from '@pipe/icon.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import forecasts from '@testData/forecasts.json';

describe('forecast-table component with forecast', () => {
  beforeEach(() => {
    cy.mount(`<app-forecast-table [forecasts]="forecasts" [error]="error" [location]="location"></app-forecast-table>`,{
      declarations: [
        ForecastComponent,
        ForecastTableComponent,
        IconPipe
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        MatSlideToggleModule
      ],
      componentProperties: {
        forecasts: forecasts,
        error: undefined,
        location: {
          name:'Bermeo',
          country: 'ES'
        }
      }
    })
  })

  it('The forecasts should be displayed in correct order and amount', () => {
    cy.get('app-forecast-table').find('app-forecast').should('have.length', 5);
    cy.get('app-forecast-table app-forecast:nth-child(1)').find('.time').contains('October 30')
  });

  it('The forecasts should be shorterd after clicking in short', () => {
    cy.get('app-forecast-table').find('app-forecast').should('have.length', 5);
    cy.get('mat-icon[fonticon="expand_more"]').click();
    cy.get('app-forecast-table app-forecast:nth-child(1)').find('.time').contains('November 3')
  });

});

describe('forecast-table component with error message', () => {
  beforeEach(() => {
    cy.mount(`<app-forecast-table [forecasts]="forecasts" [error]="error" [location]="location"></app-forecast-table>`,{
      declarations: [
        ForecastComponent,
        ForecastTableComponent,
        IconPipe
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        MatSlideToggleModule
      ],
      componentProperties: {
        forecasts: [],
        error: {
          code: 404,
          message: 'City not found'
        },
        location: undefined
      }
    })
  })

  it('The table should display the error message', () => {
    cy.get('app-forecast-table').find('div').contains('City not found');
  });

});

