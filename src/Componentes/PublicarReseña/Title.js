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

function StoreIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
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
            justify="left"
            alignItems="left"
            spacing={24}>
            <Grid item xs={6}>
               
                <StoreIcon className="storeIcon"/>
                <Typography variant="title">{this.props.titulo}</Typography>
                
                </Grid>
                <Grid item xs={6}>
                <Button>PUBLICAR RESEÑA</Button>
                </Grid>
                </Grid>         
        )
    }
}

export default withStyles(styles)(Title);