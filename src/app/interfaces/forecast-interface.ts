import {Location} from '@interfaces/broadcast-interface';

export interface Forecast {
  dt: number;
  dt_txt: string;
  temp: number;
  description: string;
  icon: string;
}

export interface ApiGeneralResponse {
  forecast: Forecast[];
  location: Location;
}