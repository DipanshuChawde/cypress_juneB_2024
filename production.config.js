const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com/v1/'
    },
    env: {
        username: "problem_user",
        password: "secret_sauce"
    }
})