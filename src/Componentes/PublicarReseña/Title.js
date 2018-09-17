import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import 'typeface-roboto';

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

class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid container direction="column"
                justify="left"
                alignItems="left" spacing={2} >
                <Grid item xs ></Grid>
                <Grid item xs={8} sm={6} md={6} lg={6}>
                    <Typography variant="title">{this.props.titulo}</Typography>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
            
        )
    }
}

export default withStyles(styles)(Title);