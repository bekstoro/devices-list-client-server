import axios from 'axios';
import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects';

import {
  addDeviceToCartError,
  addDeviceToCartSuccess,
  getCartError,
  getCartSuccess,
  removeDeviceFromCartError,
  removeDeviceFromCartSuccess
} from './cart.actions';
import { ADD_DEVICE_TO_CART_REQUEST, GET_CART_REQUEST, REMOVE_DEVICE_FROM_CART_REQUEST } from './cart.constants';
import CartService from './cart.service';

function* getCartSaga() {
  yield takeLatest(GET_CART_REQUEST, getCartRequest);
}

function* getCartRequest() {
  try {
    const response = yield call(CartService.get);
    yield put(getCartSuccess(response.data && response.data.cart));
  } catch (err) {
    yield put(getCartError(err));
  } finally {
    const source = axios.CancelToken.source();
    if (yield cancelled()) {
      source.cancel();
    }
  }
}

function* addDeviceToCartSaga() {
  yield takeLatest(ADD_DEVICE_TO_CART_REQUEST, addDeviceToCartRequest);
}

function* addDeviceToCartRequest(device) {
  try {
    const response = yield call(CartService.add, device);
    yield put(addDeviceToCartSuccess(response.data && response.data.cart));
  } catch (err) {
    yield put(addDeviceToCartError(err));
  } finally {
    const source = axios.CancelToken.source();
    if (yield cancelled()) {
      source.cancel();
    }
  }
}

function* removeDeviceFromCartSaga() {
  yield takeLatest(REMOVE_DEVICE_FROM_CART_REQUEST, removeDeviceFromCartRequest);
}

function* removeDeviceFromCartRequest(deviceId) {
  try {
    const response = yield call(CartService.remove, deviceId);
    yield put(removeDeviceFromCartSuccess(response.data && response.data.cart));
  } catch (err) {
    yield put(removeDeviceFromCartError(err));
  } finally {
    const source = axios.CancelToken.source();
    if (yield cancelled()) {
      source.cancel();
    }
  }
}

export default function* () {
  yield all([
    addDeviceToCartSaga(),
    getCartSaga(),
    removeDeviceFromCartSaga()
  ]);
};
