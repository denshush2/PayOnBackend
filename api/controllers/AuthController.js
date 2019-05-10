/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  async login(req, res) {
    let response = "";
    if (req.body.phone) {
      // const message = await sails.helpers.twilio("3188967383");
      const user = await sails.helpers.auth(req.body.phone);
      console.log("auth", user);
      const token = await sails.helpers.jwt("encrypt", { user });
      console.log(token);
      response = await sails.helpers.response("success", "New User", {
        type: "new",
        token
      });
      // const user = await User.findOne({ phone: req.body.phone });
      // if (user) {
      //   const token = await sails.helpers.jwt("encrypt", { user });
      //   response = await sails.helpers.response("success", "User", {
      //     token
      //   });
      // } else {
      //   let phone = req.body.phone;
      //   const newUser = await User.create({ phone: phone }).fetch();
      //   if (newUser) {
      //     console.log(newUser);
      //     const token = await sails.helpers.jwt("encrypt", { user });
      //     response = await sails.helpers.response("success", "New User", {
      //       type: "new",
      //       token
      //     });
      //   } else {
      //     response = await sails.helpers.response(
      //       "error",
      //       "User not created",
      //       {}
      //     );
      //   }
      // }
    } else {
      response = await sails.helpers.response(
        "error",
        "Specify phone number",
        {}
      );
    }
    res.ok(response);
  },
  async verifyCode(req, res) {
    let response = "";
    if (req.body.phone && req.body.code) {
      const user = await sails.helpers.auth(req.body.phone);
      if (user.verificationNumber === req.body.code) {
        const token = await sails.helpers.jwt("encrypt", { user });
        response = await sails.helpers.response("success", "User Verified", {
          token,
          user: {
            name: user.name,
            lastname: user.lastname,
            creditCard: user.creditCardTokenId
          }
        });
      } else {
        response = await sails.helpers.response("error", "Wrong code", {});
      }
    } else {
      response = await sails.helpers.response("error", "Wrong data", {});
    }
    res.ok(response);
  },
  async verifyToken(req, res) {
    res.ok("ok");
  }

  // async signIn(req, res) {
  //   let response = "";
  //   if (req.body.phone) {
  //     const phone = req.body.phone;
  //     if()
  //     const user = await User.create({ phone });
  //   } else {
  //     response = await sails.helpers.response(
  //       "error",
  //       "Specify phone number",
  //       {}
  //     );
  //   }
  // }
};
