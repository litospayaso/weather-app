import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '@app/interfaces/forecast-interface';
import { Location, ApiErrorResponse } from '@interfaces/broadcast-interface';

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.scss']
})
export class ForecastTableComponent implements OnInit {

  @Input() location: Location = undefined as unknown as Location;
  @Input() forecasts: Forecast[] = [];
  @Input() error: ApiErrorResponse = undefined as unknown as ApiErrorResponse;

  public sortingDescendant = true;
  public showHours = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  filter(): Forecast[] {
    let result = this.forecasts.sort((a,b) => {
      if(this.sortingDescendant) {
        return a.dt - b.dt;
      }
      return b.dt - a.dt;
    });
    if (!this.showHours) {
      result = result.filter(e => e.dt_txt.includes('15:00:00')) 
    }
    return result;
  }
  
  changeSorting() {
    this.sortingDescendant = !this.sortingDescendant;
  }
}
