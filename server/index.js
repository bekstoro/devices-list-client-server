const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const { initialCart, initialDevices } = require('./constants');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  allowOrigin: ['*'],
  allowedHeaders: ['*'],
  methods: 'GET,POST,DELETE',
  origin: ['http://localhost:3000'],
}));

app.get('/cart', (req, res) => {
  res.json({
    cart: initialCart
  });
});

app.post('/cart', (req, res) => {
  initialCart.push(req.body);
  res.json({
    cart: initialCart
  });
});

app.delete('/cart/:deviceId', (req, res) => {
  res.json({
    cart: initialCart.filter(device => device.id !== req.params.deviceId)
  });
});

app.get('/devices', (req, res) => {
  res.json({
    devices: initialDevices
  });
});

app.listen(port, () => {
  console.log('Server running on port 8080');
});
