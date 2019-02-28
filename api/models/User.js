/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    phone: {
      type: "string",
      required: true
    },
    name: {
      type: "string"
    },
    lastname: {
      type: "string"
    },
    idNumber: {
      type: "string"
    },
    creditCardTokenId: {
      type: "string"
    },
    verified: {
      type: "boolean",
      defaultsTo: true
    },
    verificationNumber: {
      type: "string"
    }
  }
};
