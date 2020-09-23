import React from 'react';
import PropTypes from 'prop-types';

import Row from './row.component';

const List = ({devices, onDeviceClick}) =>
  devices.map(device => <Row key={device.id} device={device} onDeviceClick={onDeviceClick}/>);

List.propTypes = {
  devices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  onDeviceClick: PropTypes.func.isRequired
};

export default List;
