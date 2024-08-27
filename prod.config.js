const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl:'https://practice.automationtesting.in/'
    },
    env : {
        uid:'productionTesting@gmail.com',
        pw :'dipanshu@1'
        
    }

})