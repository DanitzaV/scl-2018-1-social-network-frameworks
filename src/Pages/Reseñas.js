import React, { Component } from 'react';
import Tipography from '../Componentes/PublicarReseña/Title';
import '../Componentes/ReseñasPublicadas/reseñas.css';
import AppBar from '../Componentes/AppBar/AppBar';
import ShowReviews from '../Componentes/PublicarReseña/ViewReviews';
import app from './../base';
import {
    BrowserRouter as ReactRouter,
    Link,
    Route,
  } from 'react-router-dom';
  import { Grid, FormControl, Input, Typography, Button } from '@material-ui/core';

class Reseñas extends Component {
    render() {
        return (
            <div className="FondoReseñas">
            <AppBar />
            <h1>hola"!</h1>          
            <Tipography titulo="Tienda" /> 
            <ShowReviews />
            </div>
        )
    }
}

export default Reseñas;