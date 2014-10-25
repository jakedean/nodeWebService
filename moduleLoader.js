var fs = require('fs');

var moduleLoader = {
  
  /**
   * Load the module for the router to be able to call the user's desired method on.
   *
   * @param {Object} serviceResourceObject An object with keys for the service and
   *                                       resource we want to load.
   *
   * @return {Object} We will return what the module that we load returns.
   */
  load : function (serviceResourceObject) {
  	// We will try to require in the resource module that will help the user get the info
  	// that they are looking for.
    return require('./services/' + serviceResourceObject.service + '/' + serviceResourceObject.resource + '/' + serviceResourceObject.resource + '.js');
  } 
};


module.exports = moduleLoader;