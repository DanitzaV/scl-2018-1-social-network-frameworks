import React, { Component } from 'react';
import Tipography from '../Componentes/PublicarReseña/Title';
import FormReseña from '../Componentes/PublicarReseña/FormReseña';
import { store_mall_directory } from '@material-ui/icons'
import '../Componentes/PublicarReseña/PublishReview.css';

class PublicarReseña extends Component {
    render() {
        return (
            <div>
                <Tipography titulo="Tienda" />
                <FormReseña />
            </div>
        )
    }
}

export default PublicarReseña;


