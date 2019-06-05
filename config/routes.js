/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //Test
  "get /test": "TestController.test",

  //PaymentController
  "get /payment/ping": "PaymentController.ping",
  "post /payment/createToken": "PaymentController.createToken",
  "post /payment/pay": "PaymentController.pay",

  //AuthController
  "post /auth/login": "AuthController.login",
  "post /auth/verifyCode": "AuthController.verifyCode",
  "post /auth/signIn": "AuthController.signIn",
  "post /auth/verifyToken": "AuthController.verifyToken",

  //UserController
  "post /user/setInfo": "UserController.setInfo",
  "get /user/getCreditCards": "UserController.getCreditCards",

  //OrderController
  "get /orders": "OrderController.getAllOrders"
};
