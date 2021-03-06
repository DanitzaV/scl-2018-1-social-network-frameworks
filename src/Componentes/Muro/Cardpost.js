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
import { Menu,MenuIcon,Fade,MenuItem} from '@material-ui/core';
import './muro.css';

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
          avatar: '',
          like: [],
          showimg: false,
          anchorEl: null,
          text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
        this.postid = props.id;
        this.likes = props.likes;
        this.text = props.texto;
       
    }
   handleRemove(id){
    this.props.delete(id)
   }
   handleLike(id,su){
     this.props.like(id,su)
   }
   show(){
    
    document.getElementById('hi').style.display = 'block'
    
    
   }

   handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    this.props.edit(this.postid,this.state.text)
    
    event.preventDefault();
  }
   componentWillMount(){
    this.props.imagen == "" ?  this.setState({showimg: false}) : this.setState({showimg: true})
   }
  
   handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;
    
    return (
        
      <Card className={classes.card} key={this.props.id}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.avatar.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-owns={open ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
           
          }
          
          title={this.props.user}
          subheader={this.props.horario}
        />
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.show}>Editar</MenuItem>
         
        </Menu>
        {
          this.state.showimg ? <CardMedia className={classes.media} image={this.props.imagen} title="Contemplative Reptile"/> : <img src={this.props.imagen}/>
        }
       
        <CardContent>
          <Typography component="p">
            {this.props.texto}
          </Typography>
          <form onSubmit={this.handleSubmit} id="hi" >
          <input type="text" value={this.state.text} onChange={this.handleChange} />
        <input type="submit" value="redactar" />
      </form>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={()=> this.handleLike(this.postid,this.likes)}>
            <FavoriteIcon />
            
          </IconButton>
          <p>{this.props.likes}</p>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton id={this.props.id} onClick={()=> this.handleRemove(this.postid)} aria-label="Delete"  color="secondary">
        <DeleteIcon />
      </IconButton>
        </CardActions>
       
      </Card>
    );
  }
}


export default withStyles(styles)(RecipeReviewCard);
