const twilio = require("twilio");

const client = twilio(
  "AC9156dd21da5e08e8325989c0cff4e482",
  "13b7d0f2e7120a2a84008396df4cacde"
);

module.exports = {
  friendlyName: "Twilio",

  description: "Twilio helper.",

  inputs: {
    phone: {
      type: "string",
      description: "phone number",
      example: "+573188967383",
      required: true
    },
    verifyCode: {
      type: "number",
      description: "verification code",
      example: 1231231,
      required: true
    }
  },

  exits: {
    success: {
      description: "All done."
    }
  },

  fn: async function(inputs, exits) {
    try {
      await client.messages.create({
        body: ` Welcome to ProyectX, your verification number is:  ${
          inputs.verifyCode
        }`,
        from: "+17073293877",
        to: `+57${inputs.phone}`
      });
      exits.success({ sent: true });
    } catch (e) {
      console.log("e", e);
    }

    // TODO
  }
};
