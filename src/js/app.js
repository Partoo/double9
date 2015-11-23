var Vue = require('vue')
var App = require('./app.vue')

var vue = new Vue({
           el:'body',
           components:{
           	app:App
           }          
})