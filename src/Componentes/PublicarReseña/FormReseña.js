import React, { Component } from 'react';
import { Grid, InputLabel, FormControl, Input, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../PublicarReseña/PublishReview.css';


const styles = theme => ({
  
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
  

class FormReseña extends Component {
    constructor(props) {
        super(props)
      }

    render() {
        const { classes } = this.props;
        return (
          <Grid container spacing={3}>
          <Grid item xs>
          
          </Grid>
          <Grid item xs={8} sm={6} md={6} lg={6}> 
            
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Nombre de la tienda</Typography>
                <Input type="text"/> 
              </FormControl>
           
           
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Imagen (opcional)</Typography>
                <Input type="file"/>
              </FormControl>
            
           
              <FormControl margin="normal" fullWidth>
                <Typography variant="subheading">Reseña</Typography>
                <textarea></textarea>
              </FormControl>
            </Grid>

            <Grid item xs>
            
            </Grid>
        </Grid>
        )
    }
};


export default withStyles(styles)(FormReseña); 