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
import './PublishReview.css'


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

function StoreIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
      </SvgIcon>
    );
  }

const toReviewForm = props => <Link to="/publicarreseña" {...props} />

class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      const { classes } = this.props;
        return (
            <Grid container row className={classes.marg}>
            <Grid item xs={1}>
            <StoreIcon className="storeIcon"/>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="title">{this.props.titulo}</Typography>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={4}>
            <Button variant="raised" color="primary" component={toReviewForm}>Publicar reseña</Button>
            </Grid>
            </Grid>          
        )
    }
}

export default withStyles(styles)(Title);