import React, { Component } from 'react';
import firebase from './../base';
import AppBar from '../Componentes/AppBar/AppBar';
import FormEventos from '../Componentes/EventosPublicados/FormEventos';
import Title from '../Componentes/EventosPublicados/Title';

class PublicarEventos extends Component {
    render() {
        return (
            <div className="Fondo">
                <AppBar />
                <Title titulo="Evento" />
                <FormEventos />
                
            </div>
        )
    }
}

export default PublicarEventos;