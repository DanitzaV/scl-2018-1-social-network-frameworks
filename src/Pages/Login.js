import React from 'react';

import Formulario from './../Componentes/Login/Form';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
   
  });


const Login = (props) => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <Formulario></Formulario>
        </div>

        )
}


export default withStyles(styles)(Login);