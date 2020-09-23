import {
  ADD_DEVICE_TO_CART_ERROR,
  ADD_DEVICE_TO_CART_REQUEST,
  ADD_DEVICE_TO_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_DEVICE_FROM_CART_ERROR,
  REMOVE_DEVICE_FROM_CART_REQUEST,
  REMOVE_DEVICE_FROM_CART_SUCCESS
} from './cart.constants';

export const initialState = {
  isLoading: true,
  cart: []
};

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: payload,
        isLoading: false
      };
    case GET_CART_ERROR:
      return {
        ...state,
        isLoading: false
      };
    case ADD_DEVICE_TO_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_DEVICE_TO_CART_SUCCESS:
      return {
        ...state,
        cart: payload,
        isLoading: false
      };
    case ADD_DEVICE_TO_CART_ERROR:
      return {
        ...state,
        isLoading: false
      };
    case REMOVE_DEVICE_FROM_CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_DEVICE_FROM_CART_SUCCESS:
      return {
        ...state,
        cart: payload,
        isLoading: false
      };
    case REMOVE_DEVICE_FROM_CART_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state
  }
};

export default cartReducer;
