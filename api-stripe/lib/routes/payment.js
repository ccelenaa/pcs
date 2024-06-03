"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const stripe_1 = require("stripe");
const secretKey = config.get('payment.stripe.secretKey');
const apiVersion = { apiVersion: config.get('payment.stripe.apiVersion') };
const secretHook = config.get('payment.stripe.webhooks.secret');
const stripe = new stripe_1.default(secretKey, apiVersion);
module.exports = function (server) {
    server.post({
        path: `/payment`
    }, async (req, res) => {
        var _a;
        console.log({ body: req.body });
        let { paymentMethod = ['card'], email = 'Unknown@email.com', productName = 'Unknown', productDescription = 'Unknown', amount = 0, currency = 'Unknown', metadata: { type = `Unknown`, id = 0, product = 'Unknown', price = 0, id_compte = 0, type_compte = 'Unknown', }, successUrl = 'https://unknown.com', cancelUrl = 'https://unknown.com', images = [], } = (_a = req.body) !== null && _a !== void 0 ? _a : {};
        // if (! customer) {
        //   ({id: customer} = await stripe.customers.create({name, email}));
        // }
        const options = {
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
    });
    server.post({
        path: `/payment/webhooks/event`
    }, async (req, res) => {
        try {
            const revent = stripe.webhooks.constructEvent(req.rawBody, req.headers['signature'], secretHook);
            console.log({ revent });
            res.json({ revent });
        }
        catch (err) {
            console.log(`Webhook Error: ${err.message}`);
            res.send(`Webhook Error: ${err.message}`);
        }
    });
};
//# sourceMappingURL=payment.js.map