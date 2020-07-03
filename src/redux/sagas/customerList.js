import {put, take, call, fork} from 'redux-saga/effects';
import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_ERROR,
} from '../actions/types';

import {getCustomerList} from '../../api/customerList';
import {showToast} from '../../utils/utilityFunction';

import {strings} from '../../utils/i18n';

function* watchCustomerListRequest() {
  while (true) {
    yield take(CUSTOMER_LIST_REQUEST);

    try {
      const response = yield call(getCustomerList);
      if (response.status == 200) {
        yield put({
          type: CUSTOMER_LIST_SUCCESS,
          payload: response.data,
        });
      } else {
        throw response;
      }
    } catch (error) {
      yield put({
        type: CUSTOMER_LIST_ERROR,
        error,
      });
      showToast(strings('error.unexpected'));
    }
  }
}

export default function* rootSaga() {
  yield fork(watchCustomerListRequest);
}
