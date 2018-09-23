import React, {Component} from 'react'; 
import app from './../base';
import AppBar from '../Componentes/AppBar/AppBar';
import Title from '../Componentes/EventosPublicados/Title';
import { Button } from '@material-ui/core';
import {
    BrowserRouter as ReactRouter,
    Link,
    Route,
  } from 'react-router-dom';
  import Card from '../Componentes/EventosPublicados/Card';

const aj = props => <Link to="/publicarevento" {...props} />

class Eventos extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Title titulo="Evento" />
                <Button component={aj}>Publicar Evento</Button>
                <Card />
            </div>
        )
    }
}

export default Eventos;