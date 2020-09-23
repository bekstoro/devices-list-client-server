import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header.component';
import InfoModal from '../../components/info-modal.component';
import List from '../../components/list.component';
import Modal from '../../components/modal.component';
import RowModal from '../../components/row-modal.component';

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
  const [modalComponent, setModalComponent] = useState(null);
  const [currentDevice, setCurrentDevice] = useState(null);

  useEffect(() => {
    getCart();
    getDevices();
  }, [getCart, getDevices]);

  useEffect(() => {
    switch (modal.modalId) {
      case 'row':
        setModalComponent(
          <RowModal
            cart={cart}
            device={currentDevice}
            addDeviceToCart={addDeviceToCart}
            removeDeviceFromCart={removeDeviceFromCart}
          />
        );
        break;
      case 'info':
        setModalComponent(<InfoModal title={'Someone changed data'} message={'Device quantity decreased by 1'}/>);
        break;
      default:
        setModalComponent(null);
        break;
    }
  }, [addDeviceToCart, cart, currentDevice, modal, removeDeviceFromCart, setModalComponent]);

  const onDeviceClick = device => () => {
    setCurrentDevice(device);
    setModalId('row');
    openModal();
  };

  return (
    <main>
      <Header cart={cart}/>
      <List
        devices={devices}
        onDeviceClick={onDeviceClick}
      />
      <Modal
        component={modalComponent}
        modal={modal}
        closeModal={closeModal}
      />
    </main>
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
