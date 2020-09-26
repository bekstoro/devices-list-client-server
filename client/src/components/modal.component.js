import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MaterialModal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '10px',
    cursor: 'pointer'
  }
}));

const Modal = ({modal, closeModal, component}) => {
  const classes = useStyles();

  return (
    <MaterialModal
      open={modal.isOpen}
      onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.modal}>
        <span className={classes.closeIcon} onClick={closeModal}>&#10006;</span>
        {component}
        <Button variant="contained" onClick={closeModal} className="float-right">Close</Button>
      </div>
    </MaterialModal>
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
