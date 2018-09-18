import React, { Component } from 'react';
import { Grid, FormControl, Input, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../PublicarReseña/PublishReview.css';
import {
  BrowserRouter as ReactRouter,
  Link,
  Route,
} from 'react-router-dom';


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
        super(props)
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
                <Input type="text"/> 
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
                <textarea></textarea>
              </FormControl>
              <Button className="btnForm" component={MyLink}>PUBLICAR</Button>
            </Grid>

            <Grid item xs>
            
            </Grid>
        </Grid>
        )
    }
};


export default withStyles(styles)(FormReseña); 