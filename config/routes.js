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
  //PaymentController
  "get /payment/ping": "PaymentController.ping",
  "post /payment/createToken": "PaymentController.createToken",

  //AuthController
  "post /auth/login": "AuthController.login",
  "post /auth/signIn": "AuthController.signIn",
  "post /auth/verifyToken": "AuthController.verifyToken"
};
