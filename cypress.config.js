const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //task1 (file cyTask.cy.js)
      on('task', {
        myLog(msg) {
          console.log(msg)
          return null
        }
      })
      //--------------------
      //task2 (file cyTask.cy.js)
      on('task',{
        addition({a,b}) {
          console.log(a+b)
          return a+b
        }
      })

    },
  },
});
