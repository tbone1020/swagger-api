'use strict';

var SwaggerConnect = require('swagger-connect');
var app = require('connect')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerConnect.create(config, function(err, swaggerConnect) {
  if (err) { throw err; }

  // install middleware
  swaggerConnect.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerConnect.runner.swagger.paths['/boot']) {
    console.log('Project is running, try this:\ncurl http://127.0.0.1:' + port + '/');
  } else {
  	console.log(__dirname + ' Failed to connect boot');
  }
});
