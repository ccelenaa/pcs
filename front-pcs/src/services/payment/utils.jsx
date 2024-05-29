
import { loadStripe } from '@stripe/stripe-js';
import { API_URL } from '../../Config';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('process.env.REACT_APP_PUBLIC_KEY');

export default class Utils {
  static checkout = async (pot, amount) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch(`${API_URL}/payment`, {method: 'POST', credentials: 'include', body: JSON.stringify({pot, amount: +amount})});
    const session = await response.json();

    if (stripe) {
      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      // if (result.error) {
      //   // If `redirectToCheckout` fails due to a browser or network
      //   // error, display the localized error message to your customer
      //   // using `result.error.message`.
      // }
    } else {

    }
  };

  static checkoutPrice = async (price) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const session = await fetch(
      `${API_URL}/payments/checkout/${price}`,
      {method: 'POST', credentials: 'include'
    }).then(res => {
      return res.json();
    });

    if (stripe) {
      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      // if (result.error) {
      //   // If `redirectToCheckout` fails due to a browser or network
      //   // error, display the localized error message to your customer
      //   // using `result.error.message`.
      // }
    } else {

    }
  };

}