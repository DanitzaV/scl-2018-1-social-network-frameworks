import React, { Component } from 'react';
import firebase from '../../base';
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControl, Typography } from '@material-ui/core';

const styles = theme => ({
  
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    input: {
      display: 'none',
    },
  });

class Perfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            
            name: '',
            phone: ''
        } 
    }

    componentWillMount() {
        return firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                email: user.email
            });
        });          
    }

    render() {
        return (
            <div>


               <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Imagen (opcional)</Typography>
                <input
                accept="image/*"
              
                id="contained-button-file"
                multiple
                type="file"
                onChange={this.handleOnChange}
              />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </FormControl>

                <Modal />

                <h1>Email: {this.state.email}</h1>

                <span>nombre: {this.props.nombre}</span>
               
                <span>celular: {this.props.fono}</span>
                
            </div>
        )
    }
};
export default withStyles(styles)(Perfil);  