const { defineConfig } = require("cypress");
module.exports = defineConfig({
    pageLoadTimeout: 120000, 
    env: {
        username: "standard_user",

        password: "secret_sauce"
    },
    e2e: {
        baseUrl: 'https://www.saucedemo.com/v1/'
    },
    
});
