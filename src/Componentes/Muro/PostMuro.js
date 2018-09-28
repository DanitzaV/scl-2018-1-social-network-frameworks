import React, { Component } from 'react';
import { TextField, Button, Input, Grid, Paper} from '@material-ui/core';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import firebase from './../../base';
import './muro.css';

class PostMuro extends Component {
    constructor(props){
        super(props)
        this.state = {value: '',
        img: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange =  this.handleOnChange.bind(this)
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        
        
      }
      handleSubmit(event) {
        event.preventDefault();
        const currentUser = firebase.auth().currentUser;
        
            const horas = new Date().toLocaleString();

            const newMessageKey = firebase.database().ref().child('postuser').push().key;
        firebase.database().ref(`postuser/${newMessageKey}`).set({
            creator : currentUser.uid,
            creatorName : currentUser.displayName,
            creatorcorreo: currentUser.email,
            creatorImg: currentUser.photoURL,
            picture: this.state.img,
            year: horas,
            text : this.state.value,
            likes: 0
        });
        this.setState({value: ''})
        
        
      }
  handleOnChange(event) {
    event.preventDefault();
    const photoFile = event.target.files[0]
    const fileName = photoFile.name; // nombre del archivo, sirve para armar la ruta
    const metadata = { // datos sobre el archivo que estamos subiendo
      contentType: photoFile.type// tipo de archivo que estamos subiendo
    };
    
    const task = firebase.storage().ref('imagesPost') //Corresponden a las carpetas que tenemos dentro del storage
      .child(fileName)
      .put(photoFile, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL())  //obtenemos la url de descarga (de la imagen)
      .then(url => {
        this.setState({
          img: url
        })
        // console.log(this.state.img)
      });
      
  }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={18} justify="center" style={{ padding: 20 }}>
              <Paper style={{ width: 600 }}>
                <Grid container spacing={18} justify="center" style={{ paddingTop: 20, paddingBottom: 20 }}>

                  <Grid item>
                  <Input placeholder="Escribe aqui" value={this.state.value}  onChange={this.handleChange} fullWidth />
                  </Grid>
                  <Grid item >
                    <input accept="image/*" className="btnNone"  id="icon-button-file" type="file" onChange={this.handleOnChange} />
                    <label htmlFor="icon-button-file">
                      <IconButton color="primary" component="span">
                        <PhotoCamera ali />
                      </IconButton>
                    </label>
                    <Button variant="raised" color="primary" type="submit">Publicar</Button>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
          </form>
        );
      }
    

}

export default PostMuro;