import React, { Component } from 'react';
import { Grid, Paper, TextField, FormControl, Input , InputLabel, Button, Typography} from '@material-ui/core';
import {
  BrowserRouter as ReactRouter,
  Route,
  Link
} from 'react-router-dom';


const styles = theme => ({
  
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Formulario extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    
    return (
      <Grid container spacing={2} >
        <Grid item xs >

        </Grid>
        <Grid item xs={8} sm={6} md={6} lg={6} >
          <form className>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email"  type="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
            </FormControl>
            <ReactRouter>
            
            
            <div>
            <Route path="/login" exac render={()=> {
              return (<div>
                <Typography>No tienes cuenta <Link to="/registro">Registrate</Link></Typography>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                >
                  Inicia Sesion
                </Button>
              </div>
                
              )
            }}></Route>
            <Route path="/registro" exac render={()=> {
              return (<div>
                <Typography>Ya tengo cuenta <Link to="/login">Inicia Sesion</Link></Typography>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"

                >
                  Registrate
            </Button>
              </div>
                
              )
            }}></Route>
            </div>
            
            </ReactRouter>
            
          </form>

        </Grid>
        <Grid item xs >

        </Grid>
      </Grid>
    )
  }
}

export default Formulario;