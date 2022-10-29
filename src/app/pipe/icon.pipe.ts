import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to return the icon name based on the id.
 */
 @Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  private icons:{[key: string]: string} = {
    "01d": "sunny",
    "02d": "brightness_medium",
    "03d": "cloudy",
    "04d": "filter_drama",
    "09d": "rainy",
    "10d": "sunny_snowing",
    "11d": "thunderstorm",
    "13d": "ac_unit",
    "50d": "waves",
    "01n": "sunny",
    "02n": "brightness_medium",
    "03n": "cloudy",
    "04n": "filter_drama",
    "09n": "rainy",
    "10n": "sunny_snowing",
    "11n": "thunderstorm",
    "13n": "ac_unit",
    "50n": "waves"
  }

  transform(value: string): string {
    return this.icons[value] ? this.icons[value] : '';
  }

}
