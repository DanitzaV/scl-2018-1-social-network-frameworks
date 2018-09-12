import React, { Component} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });


class Formulario extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        
        return(
            <Grid container spacing={16} >
                <Grid item xs >

                </Grid>
                <Grid item xs={10} >
                    <Paper className={styles.paper}>
                        <h1>hey</h1>
                    </Paper>
                </Grid>
                <Grid item xs >

                </Grid>
            </Grid>
        )
    }
}

export default Formulario;