const axios = require("axios");
const config = {
  payU: {
    apiLogin:
      process.env.NODE_ENV === "production"
        ? "YmNh81hI5As8ryn"
        : "pRRXKOl8ikMmt9u",
    apiKey:
      process.env.NODE_ENV === "production"
        ? "PGK4X1Kj2g75yGKFBo49w3ALCh"
        : "4Vj8eK4rloUd272L48hsrarnUA",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json"
    },
    reportsUrl:
      process.env.NODE_ENV === "production"
        ? "https://api.payulatam.com/reports-api/4.0/service.cgi"
        : "https://sandbox.api.payulatam.com/reports-api/4.0/service.cgi",
    paymentUrl:
      process.env.NODE_ENV === "production"
        ? "https://api.payulatam.com/payments-api/4.0/service.cgi"
        : "https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi"
  }
};
const ping = async () => {
  const response = await axios.post(
    config.payU.reportsUrl,
    {
      test: false,
      language: "en",
      command: "PING",
      merchant: {
        apiLogin: config.payU.apiLogin,
        apiKey: config.payU.apiKey
      }
    },
    config.payU.headers
  );
  return response.data;
};
//TODO Format response
const createToken = async payload => {
  /**
   * payload:{
   *  user:{
   *    id,
   *    name,
   *    lastname,
   *    idNumber
   *  },
   *  card:{
   *    paymentMethod,
   *    number,
   *    expirationDate
   *  }
   * }
   */

  const creditCardToken = {
    payerId: payload.user.id,
    name: payload.user.name + " " + payload.user.lastname,
    identificationNumber: payload.user.idNumber,
    paymentMethod: payload.card.paymentMethod,
    number: payload.card.number,
    expirationDate: payload.card.expirationDate
  };
  const response = await axios.post(
    config.payU.paymentUrl,
    {
      language: "es",
      command: "CREATE_TOKEN",
      merchant: {
        apiLogin: config.payU.apiLogin,
        apiKey: config.payU.apiKey
      },
      creditCardToken
    },
    { headers: config.payU.headers }
  );
  if (response.data.code === "SUCCESS") {
    return response.data.creditCardToken;
  } else {
    return response.data.error;
  }
};

module.exports = {
  ping,
  createToken
};
