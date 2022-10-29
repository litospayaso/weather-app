import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '@app/interfaces/forecast-interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input() forecast: Forecast = undefined as unknown as Forecast;
  @Input() showHours: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
