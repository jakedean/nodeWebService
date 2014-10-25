var fs = require('fs'),
    url = require('url'),
    moduleLoader = require('./moduleLoader.js');

var router = {

  /**
   * Route the request to the right service.  The URL coming in will be in the form
   * herokuapp.com/serviceName/resourceName/Identifier so this router will need to
   * map the requset to the resource within the service the user is requesting.
   *
   * @param {Object} request The request coming into the server.
   * @param {Object} response The response we will send back to the caller of the service.
   */
  routeRequest: function (request, response) {

    // Put this routre request in a try catch and call the logging service if there
    // is an error.
    try {
      // The first thing we will do is split the request URL into the parts that we need.
      var serviceAndResourceObject = this.breakDownRequestUrl(request);

      // Now we need to load the module that will serve the user the info they want.
      var resourceModule = moduleLoader.load(serviceAndResourceObject, response);

      // Init the module with the identifier and params.
      resourceModule.init(serviceAndResourceObject);

      // We have the module loaded in, now we will call the method on the resource.
      response.end(resourceModule[request.method.toString().toLowerCase()]());
        
    } catch (e) {

      // For now just catch the exception and set the response.
      // TO DO: Log the error with the logging service.
      response.end(JSON.stringify({
        success : false,
        errorMessage: e.message
      }));

    }
  },

  /**
   * This will break down the request URL into the service and resource that the user wants
   * to hit. As we said up above we know the URL will look like this => 
   * herokuapp.com/serviceName/resourceName/Identifier.  All we will need to do is split
   * it apart and set the service and resource on and object and return the object.
   *
   * @param {Object} request The request object which will have the URL the user wants to hit.
   *
   * @return {Object} An object that will have the service and resource info on it.
   */
  breakDownRequestUrl: function (request) {

    // Grab the URL from the request.
    var urlFromRequest = url.parse(request.url).pathname.split('/');

    // Make sure we have a service and a resource to call, if not we will throw an exception
    // right now.
    if (!urlFromRequest[2] || !urlFromRequest[3]) {
      throw {message : 'Make sure you provide a service and a resource for us to call.'};
    }

    // What we have now is an array of the elements of the URL where the first will be the domain
    // name => herokuapp.com, the second will be the service => serviceName, the third will be the
    // resource => resourceName and the last (if applicable) will be the identifier.
    var serviceAndResourceObject = {
      service     : urlFromRequest[2],
      resource    : urlFromRequest[3],
      identifier  : (urlFromRequest[4]) ? urlFromRequest[4] : null,
      queryObject : url.parse(request.url, true).query
    };

    return serviceAndResourceObject;

  }

};

module.exports = router;