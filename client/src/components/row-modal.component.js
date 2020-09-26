import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  quantity: {
    border: '1px solid #e1e1e1',
    padding: '0 10px',
  },
  button: {
    width: '100%',
    margin: `10px 0`,
    fontSize: '10px'
  }
}));

const RowModal = ({addDeviceToCart, cart, device, removeDeviceFromCart}) => {
  const classes = useStyles();
  const {id, name, description, price, quantity} = device;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const currentDeviceInCart = cart.find(cartDevice => cartDevice.id === device.id);
    setCounter((currentDeviceInCart && currentDeviceInCart.quantity) || 0);
  }, [cart, device]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <div className={classes.flexContainer}>
          <h3>{id}&nbsp;&nbsp;</h3>
          <h2 id="simple-modal-title">{name}</h2>
        </div>
        <p id="simple-modal-description">
          {description}
        </p>
      </Grid>
      <Grid item xs={5}>
        <div className={classes.flexContainer}>
          <h2 id="simple-modal-title">{price}</h2>
          <span className={classes.quantity}>{quantity}</span>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => addDeviceToCart(device)}
        >
          add to cart
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => removeDeviceFromCart(id)}
        >
          remove from cart
        </Button>
        <span>this item in cart: {counter}</span>
      </Grid>
    </Grid>
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
