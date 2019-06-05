module.exports = {
  friendlyName: "Auth",

  description: "Auth client.",

  inputs: {
    phone: {
      type: "string",
      description: "User phone number",
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
      // const verify = await sails.helpers.validator("phone", {
      //   phone: inputs.phone
      // });
      // console.log(verify);
      let user = await User.findOne({ phone: inputs.phone });
      if (user) {
      } else {
        user = await User.create({ phone: inputs.phone }).fetch();
      }
      const randomNumber = Math.floor(Math.random() * 1000);
      console.log("Random number", user);
      // await sails.helpers.twilio(user.phone, randomNumber);
      return exits.success(user);
    } catch (e) {
      console.log(e);
    }
    // await User.update({ phone: inputs.phone }).set({});
  }
};
