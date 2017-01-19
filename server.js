// server.js
var express= require('express');
var bodyParser = require('body-parser');
var app = express();

// the middleware will parse form data to JS object
app.use(bodyParser.urlencoded({extended: true}));

// index route
app.get('/', function (request, response){
  response.send(
    <form action="/">
    </form>
    )
})