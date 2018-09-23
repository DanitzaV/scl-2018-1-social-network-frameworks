import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import AppBar from '../Componentes/AppBar/AppBar';
import FormMessage from '../Componentes/messages/FormMessage';
import ViewMessages from './../Componentes/messages/ViewMessages';

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
                <ViewMessages/>
                <FormMessage></FormMessage>
            </Grid>
        )
    }
}
export default Message;