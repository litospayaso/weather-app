import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '@app/interfaces/forecast-interface';

/**
 * Component for display the forecast data
 */
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  /**
   * Forecast to display
   */
  @Input() forecast: Forecast = undefined as unknown as Forecast;
  /**
   * Var to check the format to display the date
   */
  @Input() showHours: boolean = true;

  /**
 * @ignore
 */
  constructor() { }

  /**
 * @ignore
 */
    ngOnInit(): void {
  }
     
}
