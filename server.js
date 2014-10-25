var http = require('http'),
    router = require('./router.js');

http.createServer(function(request, response) {
  router.routeRequest(request, response);
}).listen(process.env.PORT || 3000);