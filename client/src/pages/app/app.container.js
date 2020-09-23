import { connect } from 'react-redux';

import { addDeviceToCartRequest, getCartRequest, removeDeviceFromCartRequest } from '../../entities/cart';
import { getDevicesRequest } from '../../entities/devices';
import { closeModal, openModal, setModalId } from '../../entities/modal';
import App from './app.component';

const mapStateToProps = state => ({
  cart: state.cart.cart,
  devices: state.devices.devices,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  addDeviceToCart: (device) => dispatch(addDeviceToCartRequest(device)),
  closeModal: () => dispatch(closeModal()),
  getCart: () => dispatch(getCartRequest()),
  getDevices: () => dispatch(getDevicesRequest()),
  openModal: () => dispatch(openModal()),
  removeDeviceFromCart: (device) => dispatch(removeDeviceFromCartRequest(device)),
  setModalId: (modalId) => dispatch(setModalId(modalId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
