import React, {Component} from 'react';
// import { AppBar, Bar, Grid } from '@material-ui/core';
import AppBar from './../Componentes/AppBar/AppBar';
import { Grid } from '@material-ui/core';

class Muro extends Component {

    constructor(){
        super();

        this.state = {
            nombre: null
        }
    }
    render(){
        return(
            <div>
               <AppBar ></AppBar>
               <Grid container spacing={8} >
                <Grid item xs />               
                <Grid item xs={8} sm={6} md={6} lg={6} >
                    <h1>{}</h1>
                </Grid>
                <Grid item xs />
            </Grid>
            </div>
        )
    }
}


export default Muro;