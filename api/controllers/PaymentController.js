/**
 * PaymentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async ping(req, res) {
    const payU = await sails.helpers.payU.with({ type: "ping" });
    console.log("ping", payU);
    const response = await sails.helpers.response.with({
      type: "success",
      message: "Ping Succeed",
      payload: payU.result
    });
    res.ok(response);
  },
  async createToken(req, res) {
    let user = await User.findOne({ phone: req.body.phone });
    const payload = {
      user: {
        id: user.id.toString(),
        name: user.name,
        lastname: user.lastname,
        idNumber: user.idNumber
      },
      card: req.body.card
    };
    const payU = await sails.helpers.payU.with({
      payload,
      type: "createToken"
    });
    console.log("CreateToken", payU);
    user = await User.update({ id: payU.payerId }).set({
      creditCardTokenId: payU.creditCardTokenId
    });
    res.ok("CreateToken");
  },
  async pay(req, res) {
    const response = await sails.helpers.response.with({
      type: "success",
      message: "Payment Succeed",
      payload: {
        idpayment: "2131234123"
      }
    });
  }
};
