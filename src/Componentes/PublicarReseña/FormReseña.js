import React, { Component } from 'react';
import { Grid, FormControl, Input, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../PublicarReseña/PublishReview.css';
import {
  BrowserRouter as ReactRouter,
  Link,
  Route,
} from 'react-router-dom';
import firebase from '../../base';


const styles = theme => ({
  
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  input: {
    display: 'none',
  },
});

const MyLink = props => <Link to="/reseñas" {...props} />

class FormReseña extends Component {
    constructor(props) {
        super(props);

        this.state = {
          store: '',
          review: '',
          img: ''
        };

        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange =  this.handleOnChange.bind(this);
      }

      handleStoreChange(event) {
        this.setState({
          store: event.target.value
        });
      }

      handleReviewChange(event) {
        this.setState({
          review: event.target.value
        });
      }

      handleSubmit(event) {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
        let f = new Date();
        let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

        const newReviewKey = firebase.database().ref().child('reviews').push().key;
        firebase.database().ref(`reviews/${newReviewKey}`).set({
            creator : currentUser.uid,
            creatorName : currentUser.displayName,
            creatorcorreo: currentUser.email,
            picture: this.state.img,
            date: fecha,
            store: this.state.store,
            review: this.state.review
        });
        event.preventDefault();
      }

      handleOnChange(event) {
        event.preventDefault();
        const photoFile = event.target.files[0]
        const fileName = photoFile.name; 
        const metadata = { 
          contentType: photoFile.type
        };

        const task = firebase.storage().ref('imagesReview')
          .child(fileName)
          .put(photoFile, metadata);
          console.log(task.snapshot.downloadURL)
    
        task.then(snapshot => snapshot.ref.getDownloadURL()) 
          .then(url => {
            console.log("URL del archivo > " + url);
            this.setState({
              img: url
            });
            const currentUsers = firebase.auth().currentUser;
          });
      }

    render() {
        const { classes } = this.props;
        return (
          <form onSubmit={this.handleSubmit}> 
          <Grid container spacing={4}>
          <Grid item xs>
    
          </Grid>
          <Grid  className="FormReseña" item xs={8} sm={6} md={6} lg={6}> 
            
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Nombre de la tienda</Typography>
                <Input type="text" onChange={this.handleStoreChange} /> 
              </FormControl>
           
           
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Imagen (opcional)</Typography>
                <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={this.handleOnChange}
              />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span" className={classes.button}>
                    Upload
                  </Button>
                </label>
              </FormControl>
                      
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Reseña</Typography>
                <textarea onChange={this.handleReviewChange}></textarea>
              </FormControl>
              <Button type="submit" variant="raised" color="primary" className="btnForm">PUBLICAR</Button>
            </Grid>

            <Grid item xs>
            
            </Grid>
        </Grid>
        </form>
        )
    }
};


export default withStyles(styles)(FormReseña);  