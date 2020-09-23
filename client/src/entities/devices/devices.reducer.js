import { GET_DEVICES_ERROR, GET_DEVICES_REQUEST, GET_DEVICES_SUCCESS } from './devices.constants';

export const initialState = {
  isLoading: true,
  devices: []
};

const devicesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_DEVICES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DEVICES_SUCCESS:
      return {
        ...state,
        devices: payload,
        isLoading: false
      };
    case GET_DEVICES_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state
  }
};

export default devicesReducer;
