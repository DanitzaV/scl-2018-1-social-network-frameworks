import React, { Component } from 'react';
import { TextField, Button, Input } from '@material-ui/core';
import firebase from './../../base';
class PostMuro extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
            const horas = new Date().toLocaleString();

            const newMessageKey = firebase.database().ref().child('postuser').push().key;
        firebase.database().ref(`postuser/${newMessageKey}`).set({
            creator : currentUser.uid,
            creatorName : currentUser.displayName,
            creatorcorreo: currentUser.email,
            creatorImg: currentUser.photoURL,
            year: horas,
            text : this.state.value
        });

        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <Input value={this.state.value} onChange={this.handleChange}/>
            <Button variant="raised" type="submit">Get value</Button>
          </form>
        );
      }
    

}

export default PostMuro;