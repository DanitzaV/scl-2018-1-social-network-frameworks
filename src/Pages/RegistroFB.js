import React, {Component} from 'react';
import './../Componentes/Login/Login.css'
import {Grid, Button, Input} from '@material-ui/core';
import Title from './../Componentes/Title/Title';
import './../Componentes/Login/Login.css'
import logo from './../img/queen.png';
import app from './../base';
import {Link} from 'react-router-dom';

class RegistroFB extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.correo = React.createRef();
        this.contraseña = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
     app.auth().createUserWithEmailAndPassword(this.correo.current.value, this.contraseña.current.value)
    .then(() => {
        console.log("Usuario creado con éxito");
     })
    .catch((error) => {
        console.log("Error de firebase > Código > "+error.code);
        console.log("Error de firebase > Mensaje > "+error.message);
     });
        
      }

    render(){

        return(
            <div id="fondologin" >
                <Title titulo="LOVE YOUR BODY" imagen={logo} ></Title>
                <Grid container spacing={2} >
                    <Grid item xs />               
                    <Grid item xs={8} sm={6} md={6} lg={6} >
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Email:
                            <input required type="email" ref={this.correo} />
                            </label>
                            <label>
                                Contraseña:
                            <input required type="password" ref={this.contraseña} />
                            </label>
                            <input type="submit" value="Submit" />
                            
                           <Link to="/login">login</Link>
                            
                            
                        </form>
                    </Grid>
                    <Grid item xs />
                </Grid>
            </div>
    
            )
    }
}


export default RegistroFB;