var fs = require('fs'),
    path = require('path');

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
    // that they are looking for.  We will make sure it exists before we try to load the
    // module, and if it does not exist then we will log the error and return to the user.
    var moduleToLoad = './services/' + serviceResourceObject.service + '/' + serviceResourceObject.resource + '/' + serviceResourceObject.resource + '.js';

    var moduleExists =  path.existsSync(moduleToLoad); 

    // If the module exists then we will require it, if not we will return false.
    if (moduleExists) {
        return require(moduleToLoad);
      } else {
        // Throw an exception that will be caught in the router class.
        throw {message :'No service named => \'' + serviceResourceObject.service + '\' with resource => \'' + serviceResourceObject.resource + '\'.'};
      }

  }

};


module.exports = moduleLoader;