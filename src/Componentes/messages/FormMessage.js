import React, { Component } from 'react';
import {Grid} from '@material-ui/core';

class FormMessage extends Component {
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    render(){
        return(
            <Grid>
                <h1>HOLA Mensajes</h1>
            </Grid>
        )
    }
}

export default FormMessage;
