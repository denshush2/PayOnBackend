const moment = require("moment");

module.exports = {
  friendlyName: "Response",

  description: "Response helper for send friendly response.",

  inputs: {
    type: {
      type: "string",
      description: "type of response",
      example: "error",
      required: true
    },
    message: {
      type: "string",
      description: "Support message",
      example: "Login Success",
      required: true
    },
    payload: {
      type: "ref",
      description: "payload with message",
      example: { foo: "bar" }
    }
  },

  exits: {
    success: {
      description: "All done."
    },
    error: {
      description: "Error with params"
    }
  },

  fn: async (inputs, exits) => {
    return exits.success({
      type: inputs.type,
      time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      data: {
        message: inputs.message,
        payload: inputs.payload
      }
    });
    // TODO
  }
};
