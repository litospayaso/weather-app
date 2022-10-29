import {ForecastComponent} from '@components/forecast/forecast.component';
import { IconPipe } from '@pipe/icon.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const forecast = {
  description: "overcast clouds",
  dt: 1666969200,
  dt_txt: "2022-10-28 15:00:00",
  icon: "04d",
  temp: 27.35 
}

describe('forecast component without showHours', () => {
  beforeEach(() => {
    cy.mount(`<app-forecast [forecast]="forecast" [showHours]="showHours"></app-forecast>`,{
      declarations: [
        ForecastComponent,
        IconPipe
      ],
      imports: [
        MatIconModule,
        MatCardModule
      ],
      componentProperties: {
        forecast: forecast,
        showHours: false
      }
    })
  })

  it('The date should be displayed formatted', () => {
    cy.get('.time').then(($div) => {
      expect($div).to.contain.text('October')
      expect($div).to.contain.text('Friday')
      expect($div).to.not.contain.text('15:00')
    })
  })

  it('The description should be displayed', () => {
    cy.get('.weather-description').then(($div) => {
      expect($div).to.contain.text('overcast clouds')
    })
  })

  it('The temperature should be formatted', () => {
    cy.get('.weather-degrees').then(($div) => {
      expect($div).to.contain.text('27°C')
    })
  })
});

describe('forecast component with showHours', () => {
  beforeEach(() => {
    cy.mount(`<app-forecast [forecast]="forecast" [showHours]="showHours"></app-forecast>`,{
      declarations: [
        ForecastComponent,
        IconPipe
      ],
      imports: [
        MatIconModule,
        MatCardModule
      ],
      componentProperties: {
        forecast: forecast,
        showHours: true
      }
    })
  })

  it('The date should be displayed formatted', () => {
    cy.get('.time').then(($div) => {
      expect($div).to.contain.text('October')
      expect($div).to.contain.text('Friday')
      expect($div).to.contain.text('15:00')
    })
  })

});