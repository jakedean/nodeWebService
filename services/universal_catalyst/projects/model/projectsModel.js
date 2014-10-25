/**
 * This will be the model that we will use to interact with the database in all requests
 * related to projects.
 */
var baseModel = require('../../../base/model/baseModel.js'),
    jsUtil = require('../../../../util/js_utility_library.js');
    //pg = require('pg');
console.log(__dirname);

var projectsModel = {

 /**
	 * This will be a function to get the projects based on the params we passed in.
	 *
	 * @param {Object} paramsObject An object that has all of the params we want to filer
	 *                              the projects on.
	 *
	 * @return {Object} An object with all of the project data on it.
	 */
	getProjects: function (paramsObject) {
		return JSON.stringify({success : paramsObject.success});
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		  client.query('SELECT * FROM projects WHERE IsActive = 1' , function(err, result) {
		    if(err) { 
		  	  return console.error(err);
		    } else {
          return result.rows;
		    }
		  });
		});
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
		var insertQuery = 'INSERT INTO projects (Name, Description) ';
		insertQuery += 'VALUES (' + paramsObject.name + ', ' + paramsObject.description + ')';

		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		  client.query(insertQuery , function(err, result) {
		    if(err) { 
		  	  return {success: false};
		    } else {
          return {sucess: true};
		    }
		  });
		});
	}
}

// Extend this controller with the base controller.
jsUtil.extend(projectsModel, baseModel);

module.exports = projectsModel;