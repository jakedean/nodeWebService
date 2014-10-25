/**
 * This is a module that will just take in the identifiers and the query params
 * and set them on itself.  The module will be extened by every resource that we create
 * so we have access to this info thorughout the request.
 */

var baseResource = {

  /**
   *  Take in the identifier and the params and set them on the object.  This function will
   *  be called in the router every time we issue a request.
   *
   * @params {Object} identifierAndQueryObject An object that will have the params and Identifier on it.
   */
  init: function (identifierAndQueryObject) {
      // Set the Identifier on the object.
      this.identifier = identifierAndQueryObject.identifier;
      // Set the params on the object.
      this.params = identifierAndQueryObject.queryObject;
  }

}

module.exports = baseResource;