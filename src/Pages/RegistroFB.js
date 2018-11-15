import React, {Component} from 'react';
import './../Componentes/Login/Login.css'
import {Grid, Button, Input, FormControl,InputLabel} from '@material-ui/core';
import Title from './../Componentes/Title/Title';
import './../Componentes/Login/Login.css'
import logo from './../img/logo-registro.jpg';
import app from './../base';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class RegistroFB extends Component {
    constructor () {
        super();
        this.state = {
          email: '',
          password: '',
          showPassword: false,
        };
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
      
    //   handlePasswordChange (evt) {
    //     this.setState({ password: evt.target.value });
    //   }
    handleSubmit(event) {
    event.preventDefault();
    app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
        console.log("Usuario creado con éxito");
    })
    .catch((error) => {
        console.log("Error de firebase > Código > "+error.code);
        console.log("Error de firebase > Mensaje > "+error.message);
    });  
    }

    render() {
        return (
            <Grid container direction="column"
            justify="center"
            alignItems="center">
            <Grid iten xs={6} sm={4} md={4} lg={2} xl={2}>
            <img className="Registro_logo" src={logo}></img>
            </Grid>
            <Grid item xs={10}>
            <h1 className="Registro_title">Crea tu cuenta</h1>
            </Grid>
                <Grid item xs={8} sm={6} md={4} lg={3} xl={3}>
                    <form onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <Input id="email" type="email" name="email" autoComplete="email" onChange={this.handleEmailChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <Input
                                id="adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                autoComplete="current-password"
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
                        <Button  variant="raised" color="primary" fullWidth type="submit" className="Registro_btn">Regístrate</Button>
                        <p className="Registro_quest">Si ya tienes cuenta <br></br> inicia sesión <Link to="/login">aquí</Link></p>  
                    </form>

                </Grid>
            </Grid>
        )
    }
}


export default RegistroFB;