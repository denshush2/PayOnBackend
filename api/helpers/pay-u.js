const { ping, createToken } = require("../services/api");
module.exports = {
  friendlyName: "Payu",

  description: "",

  inputs: {
    type: {
      type: "string",
      description: "ping/createToken",
      required: true
    },
    payload: {
      type: "ref"
    }
  },

  exits: {
    success: {
      description: "All done."
    }
  },

  fn: async function(inputs, exits) {
    let response = "";
    if (inputs.type === "ping") {
      response = await ping();
    }
    if (inputs.type === "createToken") {
      response = await createToken(inputs.payload);
    }
    return exits.success(response);
  }
};
