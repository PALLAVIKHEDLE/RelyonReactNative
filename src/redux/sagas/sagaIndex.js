import {fork} from 'redux-saga/effects';

import login from './login';
import customerList from './customerList';

export default function* rootSaga() {
  yield fork(login);
  yield fork(customerList);
}
