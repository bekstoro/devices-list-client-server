import {
  ADD_DEVICE_TO_CART_ERROR,
  ADD_DEVICE_TO_CART_REQUEST,
  ADD_DEVICE_TO_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_DEVICE_FROM_CART_ERROR,
  REMOVE_DEVICE_FROM_CART_REQUEST,
  REMOVE_DEVICE_FROM_CART_SUCCESS
} from './cart.constants.js';

export const getCartRequest = () => ({
  type: GET_CART_REQUEST
});
export const getCartError = (err) => ({
  type: GET_CART_ERROR,
  payload: err
});
export const getCartSuccess = (cart) => ({
  type: GET_CART_SUCCESS,
  payload: cart
});



export const addDeviceToCartRequest = (device) => ({
  type: ADD_DEVICE_TO_CART_REQUEST,
  payload: device
});
export const addDeviceToCartError = (err) => ({
  type: ADD_DEVICE_TO_CART_ERROR,
  payload: err
});
export const addDeviceToCartSuccess = (cart) => ({
  type: ADD_DEVICE_TO_CART_SUCCESS,
  payload: cart
});



export const removeDeviceFromCartRequest = (deviceId) => ({
  type: REMOVE_DEVICE_FROM_CART_REQUEST,
  payload: deviceId
});
export const removeDeviceFromCartError = (err) => ({
  type: REMOVE_DEVICE_FROM_CART_ERROR,
  payload: err
});
export const removeDeviceFromCartSuccess = (deviceId) => ({
  type: REMOVE_DEVICE_FROM_CART_SUCCESS,
  payload: deviceId
});
