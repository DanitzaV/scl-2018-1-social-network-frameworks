import React, { Component } from 'react';

import app from '../../base';
import { Paper, Grid, Button, Avatar, Input, Divider, Typography } from '@material-ui/core';
import IconButton  from '@material-ui/core/IconButton';
import  PhotoCamera  from '@material-ui/icons/PhotoCamera';
import Edit from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import './Perfil.css'
import { withStyles } from '@material-ui/core/styles';

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
            <Grid container  style={{ padding: 20 }}>
                <Grid container justify="center">
                <Grid item>
                    <Avatar aria-label="Recipe" className='bigAvatar'>{this.state.email.charAt(0).toUpperCase()}</Avatar>
                    <Grid item>
                       
                    </Grid>
                </Grid>
                </Grid>
               

                <Grid container spacing={18} justify="center" style={{ paddingTop: 20, paddingBottom: 20 }}>
                   <Grid item>
                   <Typography align="center" variant="headline">{this.state.email}</Typography>
                   </Grid>

                    <Grid item className="formEdit">
                        <Input placeholder="Escribe aqui" value={this.state.value} onChange={this.handleChange} fullWidth />
                    </Grid>
                    <Grid item className="formEdit" >
                        <input accept="image/*" className="btnNone" id="icon-button-file" type="file" onChange={this.handleOnChange} />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" component="span">
                                <PhotoCamera ali />
                            </IconButton>
                        </label>
                        <Button variant="fab" color="secondary" aria-label="Edit"  >
                            <Edit></Edit>
                        </Button>
                    </Grid>

                </Grid>
                
                <Grid item xs={12} md={12} xl={12}>
                    <Divider />
                </Grid>
                <Grid container justify="center" >
                <Grid item  >
                <Button color="primary">Editar Perfil</Button>

                </Grid>
                </Grid>
                <Grid container >
                <Grid item xs={12} md={12} xl={12} >
                <Typography  variant="Body1">Phone: </Typography>
                <Typography  variant="Body1">Sobre Mi: </Typography>

                </Grid>
                </Grid>
                



            </Grid>
        )
    }
};
export default withStyles(styles)(Perfil);  