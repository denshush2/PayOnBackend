module.exports = async function(req, res, proceed) {
  if (req.headers.authorization) {
    const data = await sails.helpers.jwt("decrypt", {
      token: req.headers.authorization
    });
    if (data) {
      return proceed();
    } else {
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
