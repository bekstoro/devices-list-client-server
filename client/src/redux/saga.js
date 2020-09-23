import { all } from 'redux-saga/effects';

import cartSaga from '../entities/cart/cart.saga';
import devicesSaga from '../entities/devices/devices.saga';

export default function* rootSaga() {
  yield all([cartSaga(), devicesSaga()]);
};
