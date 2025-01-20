require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use environment variable for Stripe secret key
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Stripe Payment Route
app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'GBP',
                        product_data: {
                            name: 'Customised Jacket',
                            images: [req.body.imageUrl], // Expecting jacket image URL from form
                        },
                        unit_amount: 29999, // 1000 USD in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}/index.html`,
            cancel_url: `${req.protocol}://${req.get('host')}/summary.html`,
        });

res.redirect(303, session.url);
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
