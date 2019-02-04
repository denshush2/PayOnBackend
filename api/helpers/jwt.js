const jwt = require("jsonwebtoken");

module.exports = {
  friendlyName: "Jwt",

  description: "Jwt something.",

  inputs: {
    type: {
      type: "string",
      description: "encode/decode",
      required: true
    },
    payload: {
      type: "ref",
      description: "payload to encrypt or decrypt",
      required: true
    }
  },

  exits: {
    success: {
      description: "All done."
    }
  },

  fn: async function(inputs, exits) {
    // TODO
    if (inputs.type === "encrypt") {
      const token = jwt.sign(inputs.payload, sails.config.custom.jsonSecret);
      return exits.success(token);
    }
    if (inputs.type === "decrypt") {
      const Bearer = inputs.payload.token.substr(7);
      try {
        const token = jwt.verify(Bearer, sails.config.custom.jsonSecret);
        return exits.success(token);
      } catch (e) {
        return exits.error(e);
      }

      // if (token) {
      //   return exits.success(Bearer);
      // } else {
      // }
    }
    // return exits.error("no token");
  }
};
