/**
 * This is the resource class for the projects resource.  This will be able to respond to
 * a GET, POST and PUT request from the user.
 */
var baseResource = require('../../base/resource/baseResource.js'),
    jsUtil = require('../../../util/js_utility_library.js'),
    projectsController = require('./controller/projectsController.js');

var projectsModule = {

  // define the methods that we will allow on this resource.
  allowedMethods : ['GET', 'POST'],

  /**
   * This will be a call to get the info on all of the projects that I have on the site.
   * 
   * @reuturn {Object} We will return an object with info on all of my projects.
   */
  get: function () {
  	// Make a call to the controller to get the info on all of the programs.
    return projectsController.getProjects(this.params);
  },

  /**
   * This will be a call to create a new project entry.
   *
   * @return {Object} An object with a key for 'Success' and a value true or false.
   */
  post: function () {
  	return projectsController.createNewProject(this.params);
  }
}

// Now we will extend the projects module from the base resource.
jsUtil.extend(projectsModule, baseResource);

module.exports = projectsModule;