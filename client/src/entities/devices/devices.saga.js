import axios from 'axios';
import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects';

import { getDevicesError, getDevicesSuccess } from './devices.actions';
import { GET_DEVICES_REQUEST } from './devices.constants';
import DevicesService from './devices.service';

function* getDevicesSaga() {
  yield takeLatest(GET_DEVICES_REQUEST, getDevicesRequest);
}

function* getDevicesRequest() {
  try {
    const response = yield call(DevicesService.get);
    yield put(getDevicesSuccess(response.data && response.data.devices));
  } catch (err) {
    yield put(getDevicesError(err));
  } finally {
    const source = axios.CancelToken.source();
    if (yield cancelled()) {
      source.cancel();
    }
  }
}

export default function* () {
  yield all([
    getDevicesSaga()
  ]);
};
