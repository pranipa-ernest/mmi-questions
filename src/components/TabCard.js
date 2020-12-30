import React, {useEffect, useState} from 'react'
import {Typography, Box, Grid, Button, makeStyles} from '@material-ui/core'
import Timer from './Timer.js'
import PropTypes from 'prop-types';

  
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function TabCard(props) {
  
  const { children, value, index, ...other } = props;
  const classes = useStyles()

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
          <Grid item xs={6}>
            <Typography>{children}</Typography>
          </Grid>
          <Grid item xs={3}>
          <Timer/>
          </Grid>
          </Grid> 
          )}
    </div>
  );
  }

  TabCard.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  export default TabCard
  
  
