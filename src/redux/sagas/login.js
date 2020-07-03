import {put, take, call, fork} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/types';
import {loginRequest} from '../../api/Auth';
import NavigationService from '../../utils/navigationService';
import {showToast} from '../../utils/utilityFunction';
import {strings} from '../../utils/i18n';

/**
 * Log in saga
 */

function* watchLoginRequest() {
  while (true) {
    yield take(LOGIN_REQUEST);

    try {
      const response = yield call(loginRequest);
      if (response.status == 200) {
        yield put({type: LOGIN_SUCCESS, payload: response.data});
        NavigationService.navigate('dashboardScreen');
      } else {
        throw response;
      }
    } catch (error) {
      yield put({type: LOGIN_ERROR, error});
      showToast(strings('error.unexpected'));
    }
  }
}

export default function* rootSaga() {
  yield fork(watchLoginRequest);
}
