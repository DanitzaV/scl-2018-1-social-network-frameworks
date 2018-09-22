import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Grid } from '@material-ui/core';


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  rev: {
    marginTop: 10
  },
});

class MediaControlCard extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const { classes } = this.props;
  return (
    <Grid container spacing={4}>
      <Grid item xs>

      </Grid>

      <Grid item xs={12}> 
    <Card className={classes.card}>
    <Grid item xs={12}> 
      <CardMedia
        className={classes.cover}
        image= {this.props.imagen}
      />
      </Grid>
      <Grid items xs={12}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{this.props.nombre}</Typography>
          <Typography variant="subheading" color="textSecondary">
            Por {this.props.user} 
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            {this.props.fecha}
          </Typography>
          <Typography variant="body1" className={classes.rev}>
            {this.props.reseña}
          </Typography>
        </CardContent>
      </div>
      </Grid>
    </Card>
    </Grid>

    <Grid item xs>
    
    </Grid>
    </Grid>
  );
}
}

export default withStyles(styles)(MediaControlCard);
