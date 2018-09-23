import React, { Component } from 'react';
import { Grid, FormControl, Input, Typography, Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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
  
  const MyLink = props => <Link to="/eventos" {...props} />
  
  class FormEventos extends Component {
      constructor(props) {
          super(props);
  
          this.state = {
            title: '',
            fecha: '',
            hora: '',
            description: '',
            direction: '',
            img: ''
          };
  
          this.handleTitleChange = this.handleTitleChange.bind(this);
          this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
          this.handleFechaChange = this.handleFechaChange.bind(this);
          this.handleHoraChange = this.handleHoraChange.bind(this);
          this.handleDirectionChange = this.handleDirectionChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleOnChange =  this.handleOnChange.bind(this);
        }
  
        handleTitleChange(event) {
          this.setState({
            title: event.target.value
          });
        }
  
        handleDescriptionChange(event) {
          this.setState({
            description: event.target.value
          });
        }

        handleFechaChange(event) {
          this.setState({
            fecha: event.target.value
          });
        }

        handleHoraChange(event) {
          this.setState({
            hora: event.target.value
          });
        }

        handleDirectionChange(event) {
          this.setState({
            direction: event.target.value
          });
        }
  
        handleSubmit(event) {
          const currentUser = firebase.auth().currentUser;
         
          const newEventKey = firebase.database().ref().child('events').push().key;
          firebase.database().ref(`events/${newEventKey}`).set({
              creator : currentUser.uid,
              creatorcorreo: currentUser.email,
              picture: this.state.img,
              date: this.state.fecha,
              hour: this.state.hora,
              title: this.state.title,
              direction: this.state.direction,
              description: this.state.description
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
  
          const task = firebase.storage().ref('imagesEvent')
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
            <Grid container spacing={24}>
            <Grid item xs>
      
            </Grid>
            <Grid  className="FormEvento" item xs={8} sm={6} md={6} lg={6}> 
              
                <FormControl margin="normal" fullWidth>
                  <Typography variant="subheading">Nombre del evento</Typography>
                  <Input type="text" onChange={this.handleTitleChange} /> 
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
                  <Typography variant="subheading">¿Dónde será el evento?</Typography>
                  <Input type="text" onChange={this.handleDirectionChange} /> 
                </FormControl>

                <Grid container row>
                <Grid item xs={12}>
                <Typography variant="subheading">¿Cuándo será el evento?</Typography>
                </Grid>
            
                <Grid item xs={6}>
                <TextField
                  id="date"
                  label="Fecha"
                  type="date"
                  defaultValue="2018-09-24"
                  className={classes.textField}
                  onChange={this.handleFechaChange}    
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                id="time"
                label="Hora"
                type="time"
                defaultValue="18:00"
                className={classes.textField}
                onChange={this.handleHoraChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
                </Grid>
                </Grid>
               
                        
                <FormControl margin="normal" fullWidth>
                  <Typography variant="subheading">Descripción</Typography>
                  <textarea onChange={this.handleDescriptionChange}></textarea>
                </FormControl>
                <Button type="submit" className="btnForm">PUBLICAR</Button>
              </Grid>
  
              <Grid item xs>
              
              </Grid>
          </Grid>
          </form>
          )
      }
  };
  
  
  export default withStyles(styles)(FormEventos);  
