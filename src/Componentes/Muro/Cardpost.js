import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from './../../base';
import { Redirect } from 'react-router-dom';
const styles = theme => ({
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          avatar: ''
        }
        this.deletePost = this.deletePost.bind(this);
    }

    
    deletePost(){ 
      const key =  firebase.database().ref(`postuser/${this.props.id}`).key
      firebase.database().ref(`postuser/${key}`).remove();
      document.getElementById(key).style.display = "none";
    }
   

  render() {
    const { classes } = this.props;

    return (
        
      <Card className={classes.card} id={this.props.id}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.avatar.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.user}
          subheader={this.props.horario}
        />
        <CardMedia
          className={classes.media}
          image={this.props.imagen}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
           {this.props.texto}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton onClick={this.deletePost} aria-label="Delete"  color="secondary">
        <DeleteIcon />
      </IconButton>
        </CardActions>
       
      </Card>
    );
  }
}


export default withStyles(styles)(RecipeReviewCard);
