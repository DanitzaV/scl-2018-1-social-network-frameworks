import React, { Component } from 'react';
import Tipography from '../Componentes/PublicarReseña/Title';
import FormReseña from '../Componentes/PublicarReseña/FormReseña';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../Componentes/PublicarReseña/PublishReview.css';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = theme => ({
    float: {
        alignContent: 'flex-end',
    }
});

function StoreIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
      </SvgIcon>
    );
  }

class PublicarReseña extends Component {
    constructor(props) {
        super(props)
      }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={2}>
                <Grid item xs={1}>
                <StoreIcon className="storeIcon"/>
                </Grid>
                <Grid item xs={1}>
                <Tipography titulo="Tienda" />
                </Grid>
                </Grid>
                <FormReseña />
            </div>
        )
    }
}

export default withStyles(styles)(PublicarReseña); 


