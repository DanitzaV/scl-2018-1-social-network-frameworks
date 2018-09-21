import React, { Component } from 'react';
import { Grid, FormControl, Input, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../PublicarReseña/PublishReview.css';
import {
  BrowserRouter as ReactRouter,
  Link,
  Route,
} from 'react-router-dom';
import app from '../../base';


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
          review: ''
        }
      }

    render() {
        const { classes } = this.props;
        return (
          <Grid container spacing={4}>
          <Grid item xs>
          
          </Grid>
          <Grid  className="FormReseña" item xs={8} sm={6} md={6} lg={6}> 
            
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Nombre de la tienda</Typography>
                <Input type="text" ref={this.state.store} onChange={this.value.bind(this)}/> 
              </FormControl>
           
           
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Imagen (opcional)</Typography>
                <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span" className={classes.button}>
                    Upload
                  </Button>
                </label>
              </FormControl>
                      
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Reseña</Typography>
                <textarea ref={this.state.review} onChange={this.value.bind(this)}></textarea>
              </FormControl>
              <Button onClick={this.saveReview.bind(this)} className="btnForm">PUBLICAR</Button>
            </Grid>

            <Grid item xs>
            
            </Grid>
        </Grid>
        )
    }

    value = (e) => {
      this.setState({
        store: e.target.value,
        review: e.target.value
      });
    } 

    saveReview = () => {
      console.log("store name: "+this.state.store)
      console.log("review: "+ this.state.review)
    };
};


export default withStyles(styles)(FormReseña); 