module.exports = {
  friendlyName: "Credit card",

  description: "",

  inputs: {
    query: {
      type: "string",
      description: "all|",
      required: true
    },
    id: {
      type: "number",
      description: "User Id",
      required: true
    }
  },

  exits: {
    success: {
      description: "All done."
    }
  },

  fn: async function(inputs) {
    // TODO
    let response = "";
    if (inputs.query === "all") {
      response = await CreditCard.find();
    }
    return response;
  }
};
