import React, { Component } from 'react';
import Perfil from '../Componentes/Perfil/Perfil';
import AppBar from '../Componentes/AppBar/AppBar';


class UserProfile extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Perfil />
            </div>
        )
    }
}

export default UserProfile;