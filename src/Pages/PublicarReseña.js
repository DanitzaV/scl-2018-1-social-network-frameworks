import React, { Component } from 'react';
import Tipography from '../Componentes/PublicarReseña/Title';
import FormReseña from '../Componentes/PublicarReseña/FormReseña';
import '../Componentes/PublicarReseña/PublishReview.css';


class PublicarReseña extends Component {
    constructor(props) {
        super(props)
      }
    render() {
        return (
            <div className="FondoPublicarReseñas">
                <Tipography titulo="Tienda" />
                <FormReseña />
            </div>
        )
    }
}

export default PublicarReseña; 


