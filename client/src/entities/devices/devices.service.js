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

// get: () => instance.get('/devices'),
export default {
  get: () => ({
    data: {
      devices: [{
        id: 1,
        name: 'Apple Iphone 11 red',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla justo nec odio euismod hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus commodo gravida. Phasellus consequat, diam ac aliquam maximus, purus quam rhoncus erat, at fermentum lectus tortor ac massa. Donec sed arcu leo. Nunc a pharetra erat. Quisque pulvinar dolor lorem, vel maximus sem tempus sed.',
        price: '$999',
        quantity: 12,
      }, {
        id: 2,
        name: 'Apple Iphone 11 silver',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla justo nec odio euismod hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus commodo gravida. Phasellus consequat, diam ac aliquam maximus, purus quam rhoncus erat, at fermentum lectus tortor ac massa. Donec sed arcu leo. Nunc a pharetra erat. Quisque pulvinar dolor lorem, vel maximus sem tempus sed.',
        price: '$999',
        quantity: 15,
      }, {
        id: 3,
        name: 'Apple Iphone 11 black',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla justo nec odio euismod hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus commodo gravida. Phasellus consequat, diam ac aliquam maximus, purus quam rhoncus erat, at fermentum lectus tortor ac massa. Donec sed arcu leo. Nunc a pharetra erat. Quisque pulvinar dolor lorem, vel maximus sem tempus sed.',
        price: '$999',
        quantity: 21,
      }, {
        id: 4,
        name: 'Macbook Pro 13, 2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla justo nec odio euismod hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus commodo gravida. Phasellus consequat, diam ac aliquam maximus, purus quam rhoncus erat, at fermentum lectus tortor ac massa. Donec sed arcu leo. Nunc a pharetra erat. Quisque pulvinar dolor lorem, vel maximus sem tempus sed.',
        price: '$1999',
        quantity: 14,
      }, {
        id: 5,
        name: 'Macbook Pro 15, 2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla justo nec odio euismod hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus commodo gravida. Phasellus consequat, diam ac aliquam maximus, purus quam rhoncus erat, at fermentum lectus tortor ac massa. Donec sed arcu leo. Nunc a pharetra erat. Quisque pulvinar dolor lorem, vel maximus sem tempus sed.',
        price: '$2999',
        quantity: 5,
      }, {
        id: 6,
        name: 'Macbook Pro 16, 2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla justo nec odio euismod hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur faucibus commodo gravida. Phasellus consequat, diam ac aliquam maximus, purus quam rhoncus erat, at fermentum lectus tortor ac massa. Donec sed arcu leo. Nunc a pharetra erat. Quisque pulvinar dolor lorem, vel maximus sem tempus sed.',
        price: '$2999',
        quantity: 1,
      }]
    }
  })
};
