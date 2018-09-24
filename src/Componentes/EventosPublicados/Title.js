import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import 'typeface-roboto';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  BrowserRouter as ReactRouter,
  Link,
  Route,
} from 'react-router-dom';


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
    marg: {
      marginTop: 20
    }
  };
  
  function EventIcon(props) {
      return (
        <SvgIcon {...props}>
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </SvgIcon>
      );
    }
const toPublishEvent = props => <Link to="/publicarevento" {...props} />

class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      const { classes } = this.props;
        return (
            <Grid container className={classes.marg}>
            <Grid item xs={1}>
            <EventIcon className="storeIcon"/>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="title">{this.props.titulo}</Typography>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={4}>
            <Button variant="raised" color="primary" component={toPublishEvent}>Publicar Evento</Button>
            </Grid>
            </Grid>        
      )
    }
}

export default withStyles(styles)(Title);