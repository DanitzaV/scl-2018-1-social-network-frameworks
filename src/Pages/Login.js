import React from 'react';
import './../Componentes/Login/Login.css'
import Formulario from './../Componentes/Login/Form';
import { withStyles } from '@material-ui/core/styles';
import Title from './../Componentes/Title/Title'
import logo from './../img/queen.png';
const styles = theme => ({
    root: {
      flexGrow: 1,
    
    },
   
  });


const Login = (props) => {
    const {clases } = props;
    return(
        <div id="fondologin" >
            <Title titulo="LOVE YOUR BODY" imagen={logo} ></Title>
            <Formulario></Formulario>
        </div>

        )
}


export default withStyles(styles)(Login);