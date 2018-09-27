import React, { Component } from 'react';

import app from '../../base';
import { Paper,Grid,Button,Avatar } from '@material-ui/core';
import IconButton  from '@material-ui/core/IconButton';
import  PhotoCamera  from '@material-ui/icons/PhotoCamera';




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
        return app.auth().onAuthStateChanged((user) => {
            console.log(user);
            this.setState({
                email: user.email
            });
        });          
    }

    render() {
        return (
             <Grid container spacing={18} justify="center" style={{ padding: 20 }}>
              <Paper style={{ width: 600 }}>
                <Grid container spacing={18} justify="center" style={{ paddingTop: 20, paddingBottom: 20 }}>

                  <Grid item>
                  <input accept="image/*" className="btnNone" id="icon-button-file" type="file" onChange={this.handleOnChange} />
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" component="span">
                        <PhotoCamera ali />
                      </IconButton>
                    </label>
                  
                  </Grid>
                  <Grid item >
                  <Button variant="raised" color="primary" type="submit">modificar</Button>
                  <Avatar>{this.state.email.charAt(0).toUpperCase()}</Avatar>
                  <h1>Email: {this.state.email}</h1>
                  </Grid>

                </Grid>
              </Paper>
              </Grid>
        )
    }
};

export default Perfil;