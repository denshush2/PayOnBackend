/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async test(req, res) {
    const user = await Product.find().populate("company");
    res.ok(user);
  }
};
