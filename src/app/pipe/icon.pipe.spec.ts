import { IconPipe } from './icon.pipe';

describe('IconPipe', () => {
  let pipe: IconPipe;
  const icons:{[key: string]: string} = {
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

  beforeEach(() => {
    pipe = new IconPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('passing no value, should return empty string', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should return the correct value for every single icon', () => {
    Object.keys(icons).forEach(key => {
      const result = pipe.transform(key);
      expect(result).toBe(icons[key]);
    });
  });
});
