/**
 * PaymentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  testpay(req, res) {
    res.ok("asdsd");
  },
  async pay(req, res) {
    const response = await sails.helpers.response(
      "success",
      "Payment Succeed",
      {
        idpayment: "2131234123"
      }
    );
  }
};
