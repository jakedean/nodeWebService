/**
 * This will be a controller that will take care of the formatting or any business
 * logic that the projects resource will need.  This will call the projects model
 * which will return the data about the call we made.
 */
var errorsModel = require('../model/errorsModel.js'),
    baseController = require('../../../base/controller/baseController.js'),
    jsUtil = require('../../../../util/js_utility_library.js');

var errorsController = {

 /**
   * This will be a function to get the log entries based on the params we passed in.
   *
   * @param {Object} paramsObject An object that has all of the params we want to filer
   *                              the projects on.
   *
   * @return {Object} An object with all of the project data on it.
   */
  getErrors: function (paramsObject) {
    // Call the getProjects function on the model passing in the params object.
    return errorsModel.getLoggedErrors(paramsObject);
  },

  /**
   * This will create a new log item entry based on the params we pass in.
   *
   * @params {Object} paramsObject The params for the new log item we are going to log.
   *
   * @return {Object} An object the will tell the caller of the service if the call has
   *                  succeeded or not.
   */
  addNewLogItem: function (paramsObject) {
    return errorsModel.logErrorEvent(paramsObject);
  }
}

// Extend this controller with the base controller.
jsUtil.extend(errorsController, baseController);

module.exports = errorsController;