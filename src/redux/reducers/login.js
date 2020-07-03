import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/types';

const initialState = {
  isLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
