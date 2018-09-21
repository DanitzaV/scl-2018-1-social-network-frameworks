import React, {Component} from 'react';
import './../Componentes/Login/Login.css'
import Formulario from './../Componentes/Login/Form';
import {Grid, Button, Input, InputLabel, FormControl} from '@material-ui/core';
import Title from './../Componentes/Title/Title';
import './../Componentes/Login/Login.css'
import logo from './../img/queen.png';
import app from './../base';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {

    constructor () {
      super();
      this.state = {
        email: '',
        password: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    
    handleEmailChange (evt) {
      this.setState({ email: evt.target.value });
    }
    
    handlePasswordChange (evt) {
      this.setState({ password: evt.target.value });
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
                                <InputLabel htmlFor="password" >Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePasswordChange}
                                />
                            </FormControl>
                            
                            <Button  variant="raised" color="primary" type="submit" className="btnLogin">Inicia Sesion</Button>
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