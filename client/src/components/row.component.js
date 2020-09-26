import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  row: {
    padding: theme.spacing(2),
    cursor: 'pointer'
  },
  quantity: {
    border: '1px solid #e1e1e1',
    padding: '0 10px',
    float: 'right'
  }
}));

const Row = ({device, onDeviceClick}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.row} onClick={onDeviceClick(device)}>

        <Grid container spacing={3}>
          <Grid item>{device.id}</Grid>
          <Grid item xs={7}>{device.name}</Grid>
          <Grid item xs><span className={classes.quantity}>{device.quantity}</span></Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

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
