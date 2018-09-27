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
  constructor(props){
    super(props);
  this.state = {
    items: []
  }
  this.deleteItem = this.deleteItem.bind(this);
  this.daleLike = this.daleLike.bind(this);
  this.itemsRef = firebase.database().ref('postuser')  
  this.likesyes = firebase.database() 
  
}

  componentDidMount(){
    const {items} = this.state;
    this.itemsRef.on('child_added', newPost => {
      items.push({
        id: newPost.key, 
        text: newPost.val().text,
        user: newPost.val().creatorcorreo, 
        year: newPost.val().year , 
        picture: newPost.val().picture,
        likes: newPost.val().likes
      })
      this.setState({items})
    })

    this.itemsRef.on('child_removed', removepost => {
      for (let i = 0; i < items.length; i++) {
       if (items[i].id == removepost.key)  {
        items.splice(i,1)
       }
        
      }
      
      this.setState({items})
    })
    this.itemsRef.on('child_changed',cambios =>{
      for (let i = 0; i < items.length; i++) {
        if (items[i].id == cambios.key)  {
           items[i].likes = cambios.val().likes
        }
       }
       this.setState({items})
       console.log(this.state.items)
    })
    
    
  }

      componentWillUnmount() {
        firebase.database().ref('postuser').off()
      }

      deleteItem(id){
        this.itemsRef.child(id).remove()
      }
      daleLike(id,su){

        const suma = su + 1
        this.itemsRef.child(id).update({
         likes: suma
        })
        
       
      }
       
     
  render() {

    return (

       <Grid container justify="center" >
       
      {
          this.state.items.map(e => {
            
            return (
             
              
              <Grid  item key={e.id}  xs={12} sm={6} lg={5} xl={6} style={{padding: 17}} >
                <Cardpost key={e.id} id={e.id} texto={e.text} delete={this.deleteItem} like={this.daleLike} likes={e.likes} user={e.user} horario={e.year} imagen={e.picture} avatar={e.user} ></Cardpost>
              </Grid>
             
             
              
            )
          })
        }
        
        </Grid>
    );
  }
    

}

export default ViewPost;