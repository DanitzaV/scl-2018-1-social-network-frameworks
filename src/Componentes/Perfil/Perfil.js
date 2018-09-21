import React, { Component } from 'react';
import app from '../../base';

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 0,
            name: '',
            phone: ''
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
                <input type="text" ref={this.state.name}/>
                <input type="number" ref={this.state.phone}/>
            </div>
        )
    }
};

export default Perfil;