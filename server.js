var http = require('http'),
    router = require('./router.js');

// This is where it all begins.  Enjoy the ride.
http.createServer(function(request, response) {
  router.routeRequest(request, response);
}).listen(process.env.PORT || 3000);