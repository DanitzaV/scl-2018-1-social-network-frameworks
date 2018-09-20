import React, { Component } from 'react';
import Tipography from '../Componentes/PublicarReseña/Title';
import '../Componentes/ReseñasPublicadas/reseñas.css';
import AppBar from '../Componentes/AppBar/AppBar';
import app from './../base';

class Reseñas extends Component {
    render() {
        return (
            <div className="FondoReseñas">
            <AppBar />  
            <Tipography titulo="Tienda" />
            </div>
        )
    }
}

export default Reseñas;