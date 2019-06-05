/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  await Country.createEach([
    {
      name: "Colombia",
      shortName: "CO"
    }
  ]);
  await Company.createEach([
    {
      name: "San Viator",
      country: 1
    }
  ]);
  await UserStatus.createEach([
    {
      name: "active"
    },
    {
      name: "disabled"
    },
    {
      name: "online"
    },
    {
      name: "offline"
    },
    {
      name: "deleted"
    }
  ]);
  await Role.createEach([
    {
      name: "Admin"
    },
    {
      name: "Customer"
    }
  ]);
  await User.createEach([
    {
      phone: "3188967383",
      name: "test",
      lastname: "TestLastname",
      idNumber: "123123",
      verificationNumber: 7383
    }
  ]);
  await CreditCard.createEach([
    {
      token: "asdasdasasdasd",
      cvv: 234,
      user: 1
    }
  ]);
  await Product.createEach([
    {
      name: "Pago mensual",
      company: 1,
      price: "$50,000"
    }
  ]);
  await Payment.createEach([
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    },
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    },
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    },
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    },
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    },
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    },
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    },
    {
      user: 1,
      company: 1,
      product: 1,
      creditCard: 1
    }
  ]);
};
