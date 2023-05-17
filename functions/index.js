const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require('stripe')('sk_test_51LFr2SSFjx8dcK4vbGjJiGc90JGV2AAoq6iSy6pF5go4Fr6aH1G9mb49uP03w6C4Dz5xJdJaEBEO9TsUQsZaBuK200qYZ3y3PP')

//API

//App Config
const app = express();

//Middle
app.use(cors({ origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request recieved for amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command 
exports.api = functions.https.onRequest(app)

//http://localhost:5001/challenge-a60e9/us-central1/api