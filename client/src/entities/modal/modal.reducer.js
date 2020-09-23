import { CLOSE_MODAL, OPEN_MODAL, SET_MODAL_ID } from './modal.constants';

export const initialState = {
  isOpen: false,
  modalId: null
};

const modalReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CLOSE_MODAL:
      return {
        isOpen: false,
        modalId: state.modalId
      };
    case OPEN_MODAL:
      return {
        isOpen: true,
        modalId: state.modalId
      };
    case SET_MODAL_ID:
      return {
        isOpen: state.isOpen,
        modalId: payload
      };
    default:
      return state
  }
};

export default modalReducer;
