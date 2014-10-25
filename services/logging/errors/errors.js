/**
 * This is the resource for logging.  We will use this to log errors and to get the
 * logs when the system fails.
 */
var baseResource = require('../../base/resource/baseResource.js'),
    jsUtil = require('../../../util/js_utility_library.js'),
    errorsController = require('./controller/errorsController.js');

var errorsModule = {

  // define the methods that we will allow on this resource.
  allowedMethods : ['GET', 'POST'],

  /**
   * This will be a call to get the info on errors, you will likely want to pass in the
   * name of the application and a date range to limit the number of results coming back
   * from the service.
   * 
   * @reuturn {Object} We will return an object with info on the errors that fit the criteria
   *                   of the params the user passed in.
   */
  get: function () {
  	// Make a call to the controller to get the info on all of the programs.
    return errorsController.getErrors(this.params);
  },

  /**
   * This will be a call to add a new error to the log.
   *
   * @return {Object} An object with a key for 'Success' and a value true or false.
   */
  post: function () {
  	return errorsController.addNewLogItem(this.params);
  }
}

// Now we will extend the projects module from the base resource.
jsUtil.extend(errorsModule, baseResource);

module.exports = errorsModule;