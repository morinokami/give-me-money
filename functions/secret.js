const Stripe = require("stripe");
const { STRIPE_SECRET_KEY } = process.env;
const stripe = Stripe(STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 888,
    currency: "jpy",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(paymentIntent),
  };
};
