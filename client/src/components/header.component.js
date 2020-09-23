import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cart }) => (
  <div>
    <h1>Test application</h1>
    <span>Total in cart </span>
    <span>{cart.length ? cart.reduce((acc, curr) => acc + curr.quantity, 0) : 0} item{cart.length ? 's': ''}</span>
  </div>
);

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired
};

export default Header;
