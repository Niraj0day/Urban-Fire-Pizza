const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PUBLISHABLE_KEY = 'pk_test_51N9eZBL4uDSAtGXOUX0m4PKO4W28GVlCzf9IR5dZAkTllbQNjx1PG3BApXCpUd8iNdYvHPiIQAR6CoEq0Z97wSyl00ERYITUJ7';
const SECRET_KEY = 'sk_test_51N9eZBL4uDSAtGXOgt4fVPA55itdJt58emeLb4bYm2zRlkMUAjaRIcsjA29bvPydZH0YeyAJGvWNy9dFACXND37900Tx9KWhyt';
const stripe = require('stripe')(SECRET_KEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set( path.join(__dirname, 'Urban Fire Pizza Final'));


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Urban Fire Pizza Final', 'home.html'));
});


app.post('/payment', (req, res) => {
  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
      name: 'pay-up',
      address: {
        line1: 'Monument,CO',
        postal_code: '80132',
        city: 'Monument',
        state: 'Colorado',
        country: 'USA'
      }
    })
    .then((customer) => {
      return stripe.charges.create({
        amount: 7000,
        description: 'Buy now',
        currency: 'USD',
        customer: customer.id
      });
    })
    .then((charge) => {
      console.log(charge);
      res.send('confirm');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
