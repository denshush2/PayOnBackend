module.exports = {
  friendlyName: "Validator",

  description: "Validator data.",

  inputs: {
    type: {
      type: "string",
      description: "type of validate",
      example: "phone",
      required: true
    },
    payload: {
      type: "ref",
      required: true
    }
  },

  exits: {
    success: {
      outputFriendlyName: "All Done",
      outputDescription: "Boolean"
    },
    phoneError: {
      description: "Validation failed",
      outputFriendlyName: "Phone error"
    }
  },

  fn: async function(inputs, exits) {
    if (inputs.type === "phone") {
      console.log(inputs.payload);
      const phoneLenght = parseInt(inputs.payload.phone).toString().length;
      if (phoneLenght !== 10) {
        console.log("Error Boddy");
        throw "phoneError";
      } else {
        console.log(phoneLenght);
      }
    }
    return exits.success();
  }
};
