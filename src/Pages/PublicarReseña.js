import React, { Component } from 'react';
import Tipography from '../Componentes/PublicarReseña/Title';
import FormReseña from '../Componentes/PublicarReseña/FormReseña';
import '../Componentes/PublicarReseña/PublishReview.css';
import AppBar from '../Componentes/AppBar/AppBar';
import app from './../base';
import MediaControlCard from '../Componentes/PublicarReseña/ReviewCard';


class PublicarReseña extends Component {
    constructor(props) {
        super(props)
      }
    render() {
        return (
            <div className="FondoPublicarReseñas">
                <AppBar />
                <Tipography titulo="Tienda" />
                <FormReseña />
                <MediaControlCard />
            </div>
        )
    }
}

export default PublicarReseña; 


