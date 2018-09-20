import React, { Component } from 'react';
import Perfil from '../Componentes/Perfil/Perfil';
import AppBar from '../Componentes/AppBar/AppBar';


class UserProfile extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <h1>Perfil</h1>
            </div>
        )
    }
}

export default UserProfile;