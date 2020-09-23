import { CLOSE_MODAL, OPEN_MODAL, SET_MODAL_ID } from './modal.constants.js';

export const closeModal = () => ({
  type: CLOSE_MODAL
});
export const openModal = () => ({
  type: OPEN_MODAL
});
export const setModalId = (modalId) => ({
  type: SET_MODAL_ID,
  payload: modalId
});
