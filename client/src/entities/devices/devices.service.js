import axios from '../../utilities/axios';

export default {
  get: () => axios.get('/devices')
};
