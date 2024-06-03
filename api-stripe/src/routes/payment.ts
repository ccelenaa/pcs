"use strict";

import * as config from 'config';
import Stripe from 'stripe';
import * as restify from "restify";

const secretKey: string = config.get('payment.stripe.secretKey');
const apiVersion: Stripe.StripeConfig = { apiVersion: config.get('payment.stripe.apiVersion') };

const secretHook: string = config.get('payment.stripe.webhooks.secret');

const stripe = new Stripe(secretKey, apiVersion);

module.exports = function (server: restify.Server) {

  server.post(
    <restify.RouteOptions>{
      path: `/payment`
    },
    async (req, res) => {

      console.log({ body: req.body });

      let {
        paymentMethod = ['card'],
        email = 'Unknown@email.com',
        productName = 'Unknown',
        productDescription = 'Unknown',
        amount = 0,
        currency = 'Unknown',
        metadata: {
          type = `Unknown`,
          id = 0,
          product = 'Unknown',
          price = 0,
          id_compte = 0,
          type_compte = 'Unknown',
        },
        successUrl = 'https://unknown.com',
        cancelUrl = 'https://unknown.com',
        images = [],
      } = req.body ?? {};

      // if (! customer) {
      //   ({id: customer} = await stripe.customers.create({name, email}));
      // }

      const options: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: paymentMethod,
        customer_email: email,
        line_items: [{
          price_data: {
            currency,
            product_data: {
              name: productName,
              description: productDescription,
              images
            },
            unit_amount: amount,
          },
          quantity: 1,
        }],
        mode: 'payment',
        locale: 'fr',
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: {
          type,
          id,
          product,
          price,
          currency,
          id_compte,
          type_compte,
        },
        payment_intent_data: {
          receipt_email: email,
          description: `${type}-${id}`,
          metadata: {
            type,
            id,
          }
        }
      };
      console.log(JSON.stringify(options));

      const session = await stripe.checkout.sessions.create(options);

      console.log({ session: JSON.stringify(session, null, 2) });

      res.json({ id: session.id });
    }
  );


  server.post(
    <restify.RouteOptions>{
      path: `/payment/webhooks/event`
    },
    async (req: restify.Request, res: restify.Response) => {
      try {
        const revent = stripe.webhooks.constructEvent(req.rawBody, req.headers['signature'], secretHook);
        console.log({ revent });
        res.json({ revent });
      } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        res.send(`Webhook Error: ${err.message}`);
      }
    }
  );

};
