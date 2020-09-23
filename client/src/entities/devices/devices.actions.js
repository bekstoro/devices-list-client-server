import { GET_DEVICES_ERROR, GET_DEVICES_REQUEST, GET_DEVICES_SUCCESS } from './devices.constants.js';

export const getDevicesRequest = () => ({
  type: GET_DEVICES_REQUEST
});
export const getDevicesError = (err) => ({
  type: GET_DEVICES_ERROR,
  payload: err
});
export const getDevicesSuccess = (devices) => ({
  type: GET_DEVICES_SUCCESS,
  payload: devices
});
