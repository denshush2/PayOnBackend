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
    /*  Inputs 
      {
        phone:string,
        card:{
          paymentMethod,
          number,
          expirationDate
        }
      }
  
  */
    let response = "";
    console.log(req.body);
    let user = await User.findOne({ phone: req.body.phone });
    const payload = {
      user: {
        id: user.id.toString(),
        name: req.body.card.name,
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
    response = await sails.helpers.response("success", "Card Created", {});
    res.ok(response);
  },

  async pay(req, res) {
    const payU = await sails.helpers.payU.with({
      payload: { name: "asdasd" },
      type: "pay"
    });
    const response = await sails.helpers.response.with({
      type: "success",
      message: "Payment Succeed",
      payload: payU.data
    });
    res.ok(response);
  }
};
