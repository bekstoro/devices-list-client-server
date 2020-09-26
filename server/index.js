const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const devices = require('./devices');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({
  allowOrigin: ['*'],
  allowedHeaders: ['*'],
  methods: 'GET,POST,DELETE',
  origin: ['http://localhost:3000'],
}));

app.get('/cart', (req, res) => res.json({cart: devices.getCart()}));

app.post('/cart', (req, res) => res.json({cart: devices.addToCart(req.body)}));

app.delete('/cart/:deviceId', (req, res) => res.json({cart: devices.removeFromCart(Number.parseInt(req.params && req.params.deviceId))}));

app.get('/devices', (req, res) => res.json({devices: devices.getDevices()}));

app.listen(port, () => {
  console.log('Server running on port 8080');
});
