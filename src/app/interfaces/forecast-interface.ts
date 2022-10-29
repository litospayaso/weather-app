import {Location} from '@interfaces/broadcast-interface';

/**
 * @ignore
 */
 export interface Forecast {
  dt: number;
  dt_txt: string;
  temp: number;
  description: string;
  icon: string;
}

/**
 * @ignore
 */
 export interface ApiGeneralResponse {
  forecast: Forecast[];
  location: Location;
}