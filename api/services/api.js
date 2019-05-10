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
const submitTransaction = async payload => {
  const response = await axios.post(
    config.payU.paymentUrl,
    {
      language: "es",
      command: "CREATE_TOKEN",
      merchant: {
        apiLogin: config.payU.apiLogin,
        apiKey: config.payU.apiKey
      },
      transaction
    },
    {
      headers: config.payU.headers
    }
  );
};

const pay = async payload => {
  const data = {
    language: "es",
    command: "SUBMIT_TRANSACTION",
    merchant: {
      apiKey: "4Vj8eK4rloUd272L48hsrarnUA",
      apiLogin: "pRRXKOl8ikMmt9u"
    },
    transaction: {
      order: {
        accountId: "512322",
        referenceCode: "payment_test_00000001",
        description: "payment test",
        language: "es",
        signature: "95d7e92b23cae0cae6a98e34cc54be39",
        notifyUrl: "http://www.tes.com/confirmation",
        additionalValues: {
          TX_VALUE: {
            value: 100,
            currency: "ARS"
          }
        },
        buyer: {
          merchantBuyerId: "1",
          fullName: "First name and second buyer  name",
          emailAddress: "buyer_test@test.com",
          contactPhone: "7563126",
          dniNumber: "5415668464654",
          shippingAddress: {
            street1: "Viamonte",
            street2: "1366",
            city: "Buenos Aires",
            state: "Buenos Aires",
            country: "AR",
            postalCode: "000000",
            phone: "7563126"
          }
        },
        shippingAddress: {
          street1: "Viamonte",
          street2: "1366",
          city: "Buenos Aires",
          state: "Buenos Aires",
          country: "AR",
          postalCode: "0000000",
          phone: "7563126"
        }
      },
      payer: {
        merchantPayerId: "1",
        fullName: "First name and second payer name",
        emailAddress: "payer_test@test.com",
        contactPhone: "7563126",
        dniNumber: "5415668464654",
        billingAddress: {
          street1: "Avenida entre rios",
          street2: "452",
          city: "Plata",
          state: "Buenos Aires",
          country: "AR",
          postalCode: "64000",
          phone: "7563126"
        }
      },
      creditCard: {
        number: "4850110000000000",
        securityCode: "321",
        expirationDate: "2019/12",
        name: "REJECTED"
      },
      extraParameters: {
        INSTALLMENTS_NUMBER: 1
      },
      type: "AUTHORIZATION",
      paymentMethod: "VISA",
      paymentCountry: "AR",
      deviceSessionId: "vghs6tvkcle931686k1900o6e1",
      ipAddress: "127.0.0.1",
      cookie: "pt1t38347bs6jc9ruv2ecpv7o2",
      userAgent:
        "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
    },
    test: false
  };
  const response = await axios.post(config.payU.paymentUrl, data, {
    headers: config.payU.headers
  });
  return response;
};
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
    name: payload.user.name,
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
  createToken,
  submitTransaction,
  pay
};
