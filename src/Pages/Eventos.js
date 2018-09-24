import React, {Component} from 'react'; 
import app from './../base';
import AppBar from '../Componentes/AppBar/AppBar';
import Title from '../Componentes/EventosPublicados/Title';
import { Button } from '@material-ui/core';
import ShowEvents from '../Componentes/EventosPublicados/ShowEvents';

class Eventos extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Title titulo="Evento" />
                <ShowEvents />
            </div>
        )
    }
}

export default Eventos;