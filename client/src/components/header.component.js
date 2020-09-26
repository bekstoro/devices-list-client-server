import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  row: {
    padding: theme.spacing(2),
  },
  quantity: {
    border: '1px solid #e1e1e1',
    padding: '0 10px',
    marginLeft: '10px',
    float: 'right'
  }
}));

const Header = ({cart}) => {
  const classes = useStyles();
  const quantity = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity, 0) : 0;

  return (
    <Grid item xs={12}>
      <Paper className={classes.row}>
        <Grid container spacing={3}>
          <Grid item xs={7}>Test application</Grid>
          <Grid item xs>
            Total in cart:
            <span
              className={classes.quantity}>{quantity} item{cart.length ? 's' : ''}</span>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

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
