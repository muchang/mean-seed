var express = require('express');
var config = require('npcp');
var app = express();
var firstApp = require('./firstApp/routers/root');

app.use('/bower_components',express.static(__dirname + '/../bower_components'));
app.use('/firstApp',firstApp);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(404).send("404 Not Find");
});

var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
