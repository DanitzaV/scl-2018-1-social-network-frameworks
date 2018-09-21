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


const lo  = props => <Link to="/publicarreseña" {...props} />

class Reseñas extends Component {
    render() {
        return (
            <div className="FondoReseñas">
            <Button component={lo}>RESEÑAS</Button>
            <AppBar />  
            <Tipography titulo="Tienda" />
            <ShowReviews />
            </div>
        )
    }
}

export default Reseñas;