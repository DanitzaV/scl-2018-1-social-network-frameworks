import React, { Component } from 'react';
import firebase from '../../base';
import Button from '@material-ui/core/Button';
import Modal from './Modal';



class Perfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            phone: '',
        };
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    componentWillMount() {
        return firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                email: user.email
            });
        });          
    }

    handleNameChange(event) {
        this.setState({
          name: event.target.value
        });
    }

    handlePhoneChange(event) {
        this.setState({
          phone: event.target.value
        });
    }

    handleChange(event) {
        const currentUser = firebase.auth().currentUser;
        const newProfileKey = firebase.database().ref().child('profile').push().key;
        firebase.database().ref(`profile/${newProfileKey}`).set({
            creator : currentUser.uid,
            name: this.state.name,
            phone: this.state.phone
        });
    }

    render() {
        return (
            <div>
               <Modal />
                <h1>Email: {this.state.email}</h1>

                <span>nombre: {this.state.name}</span>
               
                <span>celular: {this.state.phone}</span>
                
            </div>
        )
    }
};

export default Perfil;