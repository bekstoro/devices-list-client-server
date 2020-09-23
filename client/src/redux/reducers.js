import { combineReducers } from 'redux';

import cart from '../entities/cart/cart.reducer';
import devices from '../entities/devices/devices.reducer';
import modal from '../entities/modal/modal.reducer';

export default combineReducers({
  cart,
  devices,
  modal
});
