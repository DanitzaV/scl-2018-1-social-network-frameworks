import React, {Component} from 'react';
// import { AppBar, Bar, Grid } from '@material-ui/core';
import AppBar from './../Componentes/AppBar/AppBar';
import { Grid, TextField, Button, Paper } from '@material-ui/core';
import PostMuro from './../Componentes/Muro/PostMuro';
import Title from '../Componentes/Title/Title';
import ViewPost from './../Componentes/Muro/ViewPost';
import { withStyles } from '@material-ui/core/styles';
import './../Componentes/Muro/muro.css'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
  
  function Muro(props) {
    const { classes } = props;
    return(
      <div className="root">
        <AppBar ></AppBar>
        <PostMuro></PostMuro>
        
        <Title titulo="New Post"></Title>          
        <ViewPost></ViewPost>
    </div>
    )
  }  
// class Muro extends Component {

//     constructor(){
//         super();
       
       
//     }
   

//     render(){
        
//     }
// }


export default withStyles(styles)(Muro);