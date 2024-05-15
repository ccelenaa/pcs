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
        let { paymentMethod = ['card'], currency = 'eur', successUrl = 'https://iheggaren.bleme.fr/payment/success', cancelUrl = 'https://unkown.bleme.fr/payment/cancel', productName = 'Unkown product', productDescription = 'Unkown description', images = ['https://www.campingoasis.com/wp-content/uploads/2018/04/merci.jpg'], email = 'unkown@email.com', amount = 9000, metadata: { price_id = 'Unkown', organization_id = 'Unkown', transaction_id = 'Unkown00-0000-0000-0000-000000000000', account_id = 'Unkown00-0000-0000-0000-000000000000', member_id = 'Unkown00-0000-0000-0000-000000000000', }, customer = null, name = 'Unkown' } = (_a = req.body) !== null && _a !== void 0 ? _a : {};
        // if (! customer) {
        //   ({id: customer} = await stripe.customers.create({name, email}));
        // }
        const options = {
            payment_method_types: paymentMethod,
            customer_email: email,
            line_items: [
                {
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
                },
            ],
            mode: 'payment',
            locale: 'fr',
            success_url: successUrl,
            cancel_url: cancelUrl,
            metadata: {
                transaction_id,
                organization_id,
                account_id,
                member_id,
                price_id,
            },
            payment_intent_data: {
                receipt_email: email,
                description: 'Ihegaren subscription',
                metadata: {
                    transaction_id,
                    organization_id,
                    account_id,
                    member_id,
                    price_id,
                }
            }
        };
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