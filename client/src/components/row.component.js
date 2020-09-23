import React from 'react';
import PropTypes from 'prop-types';

const Row = ({device, onDeviceClick}) => (
  <div onClick={onDeviceClick(device)}>
    <span>{device.id} </span>
    <span>{device.name} </span>
    <span>{device.quantity} </span>
  </div>
);

Row.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onDeviceClick: PropTypes.func.isRequired
};

export default Row;
