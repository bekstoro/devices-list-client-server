import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RowModal = ({addDeviceToCart, cart, device, removeDeviceFromCart}) => {
  const {id, name, description, price, quantity} = device;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const currentDeviceInCart = cart.find(cartDevice => cartDevice.id === cart.id);
    setCounter((currentDeviceInCart && currentDeviceInCart.quantity) || 0);
  }, [cart, device]);

  return (
    (
      <div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{quantity}</div>
        <div>this items in cart: {counter}</div>
        <div onClick={() => addDeviceToCart(device)}>add</div>
        <div onClick={() => removeDeviceFromCart(device)}>remove</div>
      </div>
    )
  )
};

RowModal.propTypes = {
  addDeviceToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  device: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  removeDeviceFromCart: PropTypes.func.isRequired
};

export default RowModal;
