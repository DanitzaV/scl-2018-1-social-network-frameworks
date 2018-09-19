import React, { Component } from 'react';
import Tipography from '../Componentes/PublicarReseña/Title';
import '../Componentes/ReseñasPublicadas/reseñas.css';
import app from './../base';

class Reseñas extends Component {
    render() {
        return (
            <div className="FondoReseñas">  
            <Tipography titulo="Tienda" />
            </div>
        )
    }
}

export default Reseñas;