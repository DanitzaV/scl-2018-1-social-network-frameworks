import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import 'typeface-roboto';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 50,
      height: 50,
    },
  };
  
  function EventIcon(props) {
      return (
        <SvgIcon {...props}>
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </SvgIcon>
      );
    }
  
  class Title extends Component {
      constructor(props) {
          super(props)
      }
  
      render() {
          return (
              <Grid
              container
              justify="right"
              alignItems="right"
              spacing={24}>
              <Grid item xs={1}>
              <EventIcon className="storeIcon"/>
              </Grid>
              <Grid item xs={1}>
              <Typography variant="title">{this.props.titulo}</Typography>
              </Grid>
              </Grid>        
        )
      }
  }
  
  export default withStyles(styles)(Title);