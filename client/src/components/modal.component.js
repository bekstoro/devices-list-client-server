import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({modal, closeModal, component}) => {
  if (!modal.isOpen) {
    return null;
  }

  return (
    <div>
      <div onClick={closeModal}>X</div>
      {component}
      <div onClick={closeModal}>Close</div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  component: PropTypes.element,
  modal: PropTypes.shape({
    isOpen: PropTypes.bool,
    modalId: PropTypes.string
  }).isRequired
};

export default Modal;
