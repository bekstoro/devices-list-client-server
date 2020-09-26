const {initialCart, initialDevices} = require('./constants');

class Devices {
  constructor(cart, devices) {
    this.updateDevice = null;
    this.updateTime = new Date();
    this.cart = cart;
    this.devices = devices;
  }

  addToCart(newDevice) {
    const availableDevice = this.devices.find(({id}) => id === newDevice.id);
    if (availableDevice && availableDevice.quantity > 0) {
      // updates cart devices
      const foundDevice = this.cart.find(({id}) => id === newDevice.id);
      if (foundDevice) {
        this.cart = this.cart.map(device => device.id === newDevice.id ? {
          ...device,
          quantity: device.quantity + 1
        } : device);
      } else {
        this.cart.push({...newDevice, quantity: 1});
      }

      // updated available devices
      this.devices = this.devices.map(device => device.id === newDevice.id ? {
        ...device,
        quantity: device.quantity - 1
      } : device);

      this.updateDevice = availableDevice;
      this.updateTime = new Date();
    }
    return this.cart;
  }

  getCart() {
    return this.cart;
  }

  getDevices() {
    return this.devices;
  }

  getUpdateDevice() {
    return this.updateDevice;
  }

  getUpdateTime() {
    return this.updateTime;
  }

  removeFromCart(deviceId) {
    const foundDevice = this.cart.find(({id}) => id === deviceId);
    if (foundDevice) {
      // updates available devices
      this.cart = this.cart.reduce((acc, device) => {
        if (device.id === deviceId) {
          if (device.quantity > 1) {
            return acc.concat({
              ...device,
              quantity: device.quantity - 1
            })
          }
          return acc;
        }
        return acc.concat(device);
      }, []);

      // updated available devices
      this.devices = this.devices.map(device => device.id === deviceId ? {
        ...device,
        quantity: device.quantity + 1
      } : device);
    }

    return this.cart;
  }
}

const devices = new Devices(initialCart, initialDevices);

module.exports = devices;
