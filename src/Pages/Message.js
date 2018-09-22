import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import AppBar from '../Componentes/AppBar/AppBar';

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    render(){
        return(
            <Grid>
                <AppBar></AppBar>
                
            </Grid>
        )
    }
}
export default Message;