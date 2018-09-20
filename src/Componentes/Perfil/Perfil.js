import React, { Component } from 'react';
import app from '../../base';

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 0
        } 
    }

    componentWillMount() {
        return app.auth().onAuthStateChanged((user) => {
            console.log(user);
            this.setState({
                email: user.email
            });
        });          
    }

    render() {
        return (
            <div>
                <h1>Email: {this.state.email}</h1>
            </div>
        )
    }
};

export default Perfil;