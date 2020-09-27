const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const devices = require('./devices');

const port = 8000;
let interval = null;
let updateTime = devices.getUpdateTime();

function onSocketConnection(socket) {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    if (updateTime !== devices.getUpdateTime()) {
      updateTime = devices.getUpdateTime();
      const updateDevice = devices.getUpdateDevice();
      if (updateDevice) {
        socket.broadcast.emit('deviceUpdate', updateDevice);
      }
    }
  }, 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
}

function startServer() {
  const app = express();
  const server = http.createServer(app);
  const io = socketIO(server);

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(cors({
    allowOrigin: ['*'],
    allowedHeaders: ['*'],
    methods: 'GET,POST,DELETE',
    origin: ['http://localhost', 'http://localhost:3000'],
  }));

  app.get('/cart', (req, res) => res.json({cart: devices.getCart()}));

  app.post('/cart', (req, res) => res.json({cart: devices.addToCart(req.body)}));

  app.delete('/cart/:deviceId', (req, res) => res.json({cart: devices.removeFromCart(Number.parseInt(req.params && req.params.deviceId))}));

  app.get('/devices', (req, res) => res.json({devices: devices.getDevices()}));

  io.on("connection", onSocketConnection);

  server.listen(port, () => console.info(`Server is running on port ${port}`));
}

startServer();
