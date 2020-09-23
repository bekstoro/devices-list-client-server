import React from 'react';
import PropTypes from 'prop-types';

const InfoModal = ({message, title}) => (
  <div>
    <h3>{title}</h3>
    <span>{message}</span>
  </div>
);

InfoModal.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default InfoModal;
