import React, { Component } from 'react';
import './../Componentes/Login/Login.css'
import {Grid, Button, Input, FormControl,InputLabel} from '@material-ui/core';
import Title from './../Componentes/Title/Title';
import './../Componentes/Login/Login.css'
import logo from './../img/main-logo.jpg';
import app from './../base';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import firebase, { auth, providerGG, providerFB } from '../base';

class Login extends Component {
    constructor () {   
        super();
        this.state = {
          email: '',
          password: '',
          user: null,
          showPassword: false,
        };
        this.loginGG = this.loginGG.bind(this);
        this.loginFB = this.loginFB.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);  
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
      
    handleEmailChange (evt) {
        this.setState({ email: evt.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        app.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
    
        })
        .catch((error) => {
            console.log("Error de firebase > Código > "+error.code);
            console.log("Error de firebase > Mensaje > "+error.message);
        });
    
    }
    
    loginGG() {
        auth.signInWithPopup(providerGG) 
          .then((result) => {
            const user = result.user;
            this.setState({ user });
        });
    }
      
    loginFB() {
        auth.signInWithPopup(providerFB) 
        .then((result) => {
          const user = result.user;
          this.setState({ user });
        });
    }
    
    render () {
        return (
            <div>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={7} sm={3} md={2} lg={2} xl={2}>
                <img className="Login_main-logo" src={logo}></img>
                </Grid>
                <Grid item xs={8} sm={6} lg={4} xl={4}>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <Input placeholder="Ingresa tu correo electrónico" className="Login_inputs" id="email" type="email" name="email" onChange={this.handleEmailChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <Input
                                placeholder="Ingresa tu contraseña"
                                className="Login_inputs"
                                id="adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button variant="raised" color="primary" fullWidth type="submit" className="Login_btn">Iniciar sesión</Button>  
                    </form>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className="-o-">
            <Grid item xs={3} sm={1} md={1} lg={1} xl={1}>
            <div className="Login_line"></div>
            </Grid>
            <Grid item xs={1} className="ó">
            ó
            </Grid>
            <Grid item xs={3} sm={1} md={1} lg={1} xl={1}>
            <div className="Login_line"></div>
            </Grid>
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={8} sm={6} lg={4} xl={4}>
            <Button onClick={this.loginFB} className="Login_btn-fb">Inicia sesión con <strong>Facebook</strong></Button>
            <Button onClick={this.loginGG} className="Login_btn-gg">Inicia sesión con <strong>Google</strong></Button>
            </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={8}>
                <p className="Login_quest">¿No tienes cuenta? <br></br> Regístrate <Link to="/registro">aquí</Link></p>
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default Login;