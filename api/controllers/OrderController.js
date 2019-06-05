/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async getAllOrders(req, res) {
    let response = "";
    const token = await sails.helpers.jwt("decrypt", {
      token: req.headers.authorization
    });
    console.log("token", token.user.id);

    const orders = await sails.helpers.orm.orders("all", token.user.id);

    response = await sails.helpers.response.with({
      type: "success",
      message: "get all orders",
      payload: orders
    });
    res.ok(response);
  }
};
