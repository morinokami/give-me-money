import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IDte5Bv64yFsKT9pnhoJow9WOVeXvCLVrqxnzYUeGbiagl1atskKt5MuIEkWFJgPD98aSs4t3QRIQj7A6FGBPlD00FnrSnEnO');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default App;
