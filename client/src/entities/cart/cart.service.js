import axios from '../../utilities/axios';

export default {
  add: ({payload: device}) => axios.post('/cart', device),
  get: () => axios.get('/cart'),
  remove: ({payload: deviceId}) => axios.delete(`/cart/${deviceId}`)
};
