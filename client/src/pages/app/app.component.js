import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/header.component';
import InfoModal from '../../components/info-modal.component';
import List from '../../components/list.component';
import Modal from '../../components/modal.component';
import RowModal from '../../components/row-modal.component';

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  row: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = ({
               addDeviceToCart,
               cart,
               closeModal,
               devices,
               getCart,
               getDevices,
               modal,
               openModal,
               removeDeviceFromCart,
               setModalId
             }) => {
  const classes = useStyles();

  const [modalComponent, setModalComponent] = useState(null);
  const [currentDevice, setCurrentDevice] = useState(null);

  const onDeviceClick = device => () => {
    setCurrentDevice(device);
    setModalId('row');
    openModal();
  };

  const onAddClick = (device) => {
    addDeviceToCart(device);
    closeModal();
  };

  const onRemoveClick = (deviceId) => {
    removeDeviceFromCart(deviceId);
    closeModal();
  };

  useEffect(() => {
    getCart();
    getDevices();
  }, [getCart, getDevices, modal.isOpen]);

  useEffect(() => {
    switch (modal.modalId) {
      case 'row':
        setModalComponent(
          <RowModal
            cart={cart}
            device={currentDevice}
            addDeviceToCart={onAddClick}
            removeDeviceFromCart={onRemoveClick}
          />
        );
        break;
      case 'info':
        setModalComponent(<InfoModal title={'Someone changed the data'} message={'Device quantity decreased by 1'}/>);
        break;
      default:
        setModalComponent(null);
        break;
    }
  }, [cart, currentDevice, modal, setModalComponent]);

  return (
    <Container className={classes.main} maxWidth="sm">
      <Grid container spacing={3}>
        <Header cart={cart}/>
        <List
          className={classes.row}
          devices={devices}
          onDeviceClick={onDeviceClick}
        />
        <Modal
          component={modalComponent}
          modal={modal}
          closeModal={closeModal}
        />
      </Grid>
    </Container>
  );
};

App.propTypes = {
  addDeviceToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  })),
  closeModal: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  })),
  getCart: PropTypes.func.isRequired,
  getDevices: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    modalId: PropTypes.string
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  removeDeviceFromCart: PropTypes.func.isRequired,
  setModalId: PropTypes.func.isRequired
};

export default App;
