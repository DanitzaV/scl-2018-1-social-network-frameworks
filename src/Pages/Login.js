import React, {Component} from 'react';
import './../Componentes/Login/Login.css'
import {Grid, Button, Input, FormControl,InputLabel} from '@material-ui/core';
import Title from './../Componentes/Title/Title';
import './../Componentes/Login/Login.css'
import logo from './../img/queen.png';
import app from './../base';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
class Login extends Component {
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

  
    render () {
        return (
                <Grid container direction="column"
                    justify="center"
                    alignItems="center" id="fondologin">
                    <Title titulo="LOVE YOUR BODY" imagen={logo} ></Title>
                    <Grid item xs={8} sm={6} md={6} lg={6} >
                    <form onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" type="email" name="email" autoComplete="email" onChange={this.handleEmailChange} />
                            </FormControl>
                            
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
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
                            <p>No tengo cuenta, <Link to="/registro">Registrate</Link></p>
                            <Button  variant="raised" color="primary" fullWidth type="submit" className="btnLogin">Inicia Sesion</Button>
                            
                        </form>

                    </Grid>

                </Grid>

           

        );
    }
  }

// class Login extends Component {
//     constructor(props){
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);

//         this.correo = React.createRef();
//         this.contraseña = React.createRef();
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value});
//       }
    
//       handleSubmit(event) {
//         const currentUser = firebase.auth().currentUser;
//         console.log(currentUser);
//             const horas = new Date().toLocaleString();

//             const newMessageKey = firebase.database().ref().child('postuser').push().key;
//         firebase.database().ref(`postuser/${newMessageKey}`).set({
//             creator : currentUser.uid,
//             creatorName : currentUser.displayName,
//             creatorcorreo: currentUser.email,
//             creatorImg: currentUser.photoURL,
//             year: horas,
//             text : this.state.value
//         });

//         event.preventDefault();
//       }
//     handleSubmit(event) {
//         event.preventDefault();
//        app.auth().signInWithEmailAndPassword(this.correo.current.value, this.contraseña.current.value)
//     .then((user) => {
        
//      })
//     .catch((error) => {
//         console.log("Error de firebase > Código > "+error.code);
//         console.log("Error de firebase > Mensaje > "+error.message);
//      });
        
//       }

//     render(){
//         return(
//             <div id="fondologin" >
//                 <Title titulo="LOVE YOUR BODY" imagen={logo} ></Title>
//                 <Grid container spacing={2} >
//                     <Grid item xs />               
//                     <Grid item xs={8} sm={6} md={6} lg={6} >
//                         <form onSubmit={this.handleSubmit}>
//                             <label>
//                                 Email:
//                             <input required type="email" ref={this.correo} />
//                             </label>
//                             <label>
//                                 Contraseña:
//                             <input required type="password" ref={this.contraseña} />
//                             </label>
//                             <input type="submit" value="Submit" />

//                            <Link to="/registro">Registro</Link>
//                         </form>
//                     </Grid>
//                     <Grid item xs />
//                 </Grid>
//             </div>
    
//             )
//     }
// }


export default Login;