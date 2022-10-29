const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  numTestsKeptInMemory: 2,
  video: false,
  pageLoadTimeout: 200000,
  redirectionLimit: 100,
  env: {
    environment: 'prod',
  },
  e2e: {
    baseUrl: 'https://litospayaso.github.io/weather-app/',
    setupNodeEvents(on, config) { }
  }
})
