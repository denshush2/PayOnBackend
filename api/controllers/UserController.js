/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  setInfo: async (req, res) => {
    let response = "";
    if (req.body.phone) {
      const user = await User.updateOne({ phone: req.body.phone }).set({
        ...req.body.data
      });
      console.log("User", user);
    }
    res.ok("asdasd");
  },
  getCreditCards: async (req, res) => {
    let response = "";
    const token = await sails.helpers.jwt("decrypt", {
      token: req.headers.authorization
    });
    const creditCards = await sails.helpers.orm.creditCard(
      "all",
      token.user.id
    );
    response = await sails.helpers.response.with({
      type: "success",
      message: "get all orders",
      payload: creditCards
    });
    res.ok(response);
  }
};
