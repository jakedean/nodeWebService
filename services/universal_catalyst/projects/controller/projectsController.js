/**
 * This will be a controller that will take care of the formatting or any business
 * logic that the projects resource will need.  This will call the projects model
 * which will return the data about the call we made.
 */
var projectsModel = require('../model/projectsModel.js'),
    baseController = require('../../../base/controller/baseController.js'),
    jsUtil = require('../../../../util/js_utility_library.js');

var projectsController = {

 /**
	 * This will be a function to get the projects based on the params we passed in.
	 *
	 * @param {Object} paramsObject An object that has all of the params we want to filer
	 *                              the projects on.
	 *
	 * @return {Object} An object with all of the project data on it.
	 */
	getProjects: function (paramsObject) {
    // Call the getProjects function on the model passing in the params object.
    return projectsModel.getProjects(paramsObject);
	},

	/**
	 * This will create a new projects entry based on the params we pass in.
	 *
	 * @params {Object} paramsObject The params for the new project.
	 *
	 * @return {Object} An object the will tell the caller of the service if the call has
	 *                  succeeded or not.
	 */
	createNewProject: function (paramsObject) {
		return projectsModel.createNewProject(paramsObject);
	}
}

// Extend this controller with the base controller.
jsUtil.extend(projectsController, baseController);

module.exports = projectsController;