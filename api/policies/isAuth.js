module.exports = async function(req, res, proceed) {
  if (req.headers.authorization) {
    try {
      const data = await sails.helpers.jwt("decrypt", {
        token: req.headers.authorization
      });

      console.log("DATA", data);
      return proceed();
    } catch (e) {
      const response = await sails.helpers.response(
        "error",
        "invalid token",
        {}
      );
      return res.forbidden(response);
    }
  } else {
    const response = await sails.helpers.response("error", "invalid token", {});
    return res.forbidden(response);
  }
};
