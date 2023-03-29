const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
      baseUrl: "http://localhost:3000",
      specPattern: "cypress/e2e/**/*.*.{js,jsx,ts,tsx}",
      viewportHeight: 1000,
      viewportWidth: 1280,
      setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config)
        // implement node event listeners here
      },
      
    },
  })
