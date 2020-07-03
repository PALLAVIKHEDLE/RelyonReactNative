import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login from './login';
import customerList from './customerList';

const rootReducer = combineReducers({
  form: formReducer,
  login,
  customerList,
});

export default rootReducer;
