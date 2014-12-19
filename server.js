// INIT AND LIBRARIES
var express = require('express');
var app = express();



// MIDDLEWARE
app.use(express.static('public'));
app.set('view engine', 'jade');


// ROUTES

app.get('/', function (req, res) {

  var locals = {
    myname: "kevin",
  };

  locals.mypets = [
    "mochi",
    "mochi",
    "boba",
    "cookie",
    "cat"
  ];

  res.render('./index', locals);

});

module.exports.app = app;