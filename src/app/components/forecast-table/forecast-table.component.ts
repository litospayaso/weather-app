import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '@app/interfaces/forecast-interface';
import { Location, ApiErrorResponse } from '@interfaces/broadcast-interface';

/**
 * Component for display the forecast as a table and handle the sorting
 */

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.scss']
})
export class ForecastTableComponent implements OnInit {

  /**
   * Var to store the location
   */
  @Input() location: Location = undefined as unknown as Location;
  /**
   * Var to store all forecasts to display on the table
   */
  @Input() forecasts: Forecast[] = [];
  /**
   * Var to store the error in case of Api returns it
   */
  @Input() error: ApiErrorResponse = undefined as unknown as ApiErrorResponse;
  
  /**
   * Var to store the sorting order of the table
   */
  public sortingDescendant = true;
  /**
   * Var to show the forecast by hours or by days
   */
  public showHours = false;

  /**
 * @ignore
 */
  constructor() {
   }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
  
    /**
   * Getter of the forecasts filter by order and the showHours variable
   * @param index level of the tree
   */
  get filter(): Forecast[] {
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
  
  /**
   * Function to change the sort order.
   */
  changeSorting() {
    this.sortingDescendant = !this.sortingDescendant;
  }
}
