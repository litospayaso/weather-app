/**
 * @ignore
 */
 export interface Main {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
  }

/**
 * @ignore
 */
 export interface Weather {
      id: number;
      main: string;
      description: string;
      icon: string;
  }

/**
 * @ignore
 */
 export interface Clouds {
      all: number;
  }

/**
 * @ignore
 */
 export interface Wind {
      speed: number;
      deg: number;
      gust: number;
  }

/**
 * @ignore
 */
 export interface Sys {
      pod: string;
  }

/**
 * @ignore
 */
 export interface Broadcast {
      dt: number;
      main: Main;
      weather: Weather[];
      clouds: Clouds;
      wind: Wind;
      visibility: number;
      pop: number;
      sys: Sys;
      dt_txt: string;
  }

/**
 * @ignore
 */
 export interface Coord {
      lat: number;
      lon: number;
  }

/**
 * @ignore
 */
 export interface Location {
      id: number;
      name: string;
      coord: Coord;
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
  }

/**
 * @ignore
 */
 export interface ApiBroadcastResponse {
      cod: string;
      message: number;
      cnt: number;
      list: Broadcast[];
      city: Location;
  }

/**
 * @ignore
 */
 export interface ApiErrorResponse {
    cod: number;
    message: string;
  }

