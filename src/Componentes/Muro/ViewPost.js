import React, { Component } from 'react';
import { TextField, Button, Input, Grid } from '@material-ui/core';
import firebase from './../../base';
import Cardpost from './Cardpost';
import './muro.css';



// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

// const ViewPost = () => {

// }

class ViewPost extends Component {
  state = {
    post: []
  }
  itemsRef = firebase.database().ref('postuser')
  componentWillMount(){
    this.itemsRef.on('child_added', (newPost) => {
                console.log(newPost)
                let message = { key: newPost.key, text: newPost.val().text, id: Date.now(),user: newPost.val().creatorcorreo, year: newPost.val().year , picture: newPost.val().picture};
        this.setState({ post: [message].concat(this.state.post) });
              }) 
    // this.itemsRef.on('value', data=> {
    //   this.setState({
    //     items: data.val()
    //   })
    // })
    console.log(this.state.post)
  }
  // deleteItem = (id) => {
  //   console.log(id)
    
  //   // this.itemsRef.update({
  //   //   [id]: null
  //   // })
  // }
 

        
     
  render() {
    return (

       <Grid container   alignItems="center" direction="row" justify="center" alignItems="center" >
       
      {
          this.state.post.map(e => {
            return (
             
              
              <Grid item xs={12} sm={6} lg={5} xl={6} style={{padding: 17}} >
                <Cardpost key={e.key} id={e.key} texto={e.text} action={this.deleteItem}  user={e.user} horario={e.year} imagen={e.picture} avatar={e.user} ></Cardpost>
              </Grid>
             
             
              
            )
          })
        }
        
        </Grid>
    );
  }
    

}

export default ViewPost;