const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4sjehb',
  chromeWebSecurity : false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  
});

