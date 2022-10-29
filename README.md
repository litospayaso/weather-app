# WeatherApp

Angular example application for getting the weather of a location. This application uses the API of [OpenWeatherMap](https://openweathermap.org/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running component tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

e2e testing is supported by [Cypress](https://www.cypress.io/). You can run the tests with the command

```bash
npm run cypress:open
```
## Running component tests

Component testing is also supported by [Cypress](https://www.cypress.io/). You can also run them from the previous command.

## Documentation

All documentation is managed via [Compodoc](https://karma-runner.github.io). To generate the documentation execute:
```bash
npm run compodoc
```

## API key storage.

The application in order to work, you have to set your API key in the `environments.ts` file:

```typescript
 export const environment = {
  production: true,
  environment: 'Local',
  API_URL: 'https://api.openweathermap.org/data/2.5',
  API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
};
```