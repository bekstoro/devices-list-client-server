import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  config => {
    return config
  },
  e => Promise.reject(e)
);

const initialCart = [{
  id: 1,
  name: 'Apple Iphone 11 red',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla justo nec odio euismod hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus commodo gravida. Phasellus consequat, diam ac aliquam maximus, purus quam rhoncus erat, at fermentum lectus tortor ac massa. Donec sed arcu leo. Nunc a pharetra erat. Quisque pulvinar dolor lorem, vel maximus sem tempus sed.',
  price: '$999',
  quantity: 2,
}];

// add: (device) => instance.post('/cart', device),
// get: () => instance.get('/cart'),
// remove: (deviceId) => instance.remove('/cart', deviceId),
export default {
  add: ({ payload }) => {
    initialCart.push({
      ...payload,
      quantity: 1
    });
    return {
      data: {
        cart: initialCart
      }
    }
  },
  get: () => ({
    data: {
      cart: initialCart
    }
  }),
  remove: ({ payload }) => {
    return {
      data: {
        cart: initialCart.filter(cart => cart.id !== payload)
      }
    }
  }
};
