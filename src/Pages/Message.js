import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import AppBar from '../Componentes/AppBar/AppBar';
import FormMessage from '../Componentes/messages/FormMessage';
import ViewMessages from './../Componentes/messages/ViewMessages';
import './../Componentes/messages/Message.css';
class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    render(){
        return(
            <div>
            <Grid container justify="center"> 
                <AppBar></AppBar>
                <Grid item sm={10} md={8} lg={8} xl={8} className="shadow">
                    <ViewMessages/>
                </Grid>
                

                
            </Grid>
            <FormMessage></FormMessage>
            </div>
        )
    }
}
export default Message;