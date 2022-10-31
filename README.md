# WeatherApp

Angular example application for getting the weather of a location. This application uses the API of [OpenWeatherMap](https://openweathermap.org/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running component tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
The run will return the coverage of the tests in the folder `coverage`;

## Running end-to-end tests

e2e testing is supported by [Cypress](https://www.cypress.io/). You can run the tests with the command

```bash
npm run cypress:e2e:run
```
## Running component tests

Component testing is also supported by [Cypress](https://www.cypress.io/). You can run them with the command.
```bash
npm run cypress:components:run
```

## Documentation

All documentation is managed via [Compodoc](https://karma-runner.github.io). To generate the documentation execute:
```bash
npm run compodoc
```

## Visual external libraries

This project uses [Angular material](https://material.angular.io/) for displaying main components.

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

## Deployment of the application

The application is released through github-pages in [https://litospayaso.github.io/weather-app/](weather-app)