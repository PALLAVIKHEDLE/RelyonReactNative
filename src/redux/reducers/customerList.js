import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_ERROR,
} from '../actions/types';

const initialState = {
  isLoading: false,
  newDataAvailable: false,
  customerList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        newDataAvailable: false,
      };
    case CUSTOMER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newDataAvailable: true,
        customerList: action.payload,
      };
    case CUSTOMER_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        newDataAvailable: false,
      };
    default:
      return state;
  }
};
