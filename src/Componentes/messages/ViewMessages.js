import React, { Component } from 'react';
import { TextField, Button, Input, Grid } from '@material-ui/core';
import firebase from './../../base';
import PaperMessage from './PaperMessage';



class ViewMessages extends Component {
    constructor(){
      super();
      this.state = {
        post: [],
        avatar: ''
      }
    }
        componentWillMount(){
          firebase.database().ref('messages')
            .limitToLast(10)
            .on('child_added', (newPost) => {
              console.log(newPost.val())
              let message = { text: newPost.val().text, id: Date.now(),user: newPost.val().creatorcorreo, year: newPost.val().year , picture: newPost.val().picture, creator: newPost.val().creator};
      this.setState({ post: [message].concat(this.state.post) });
            })

           
           
        }
        componentWillUnmount() {
            firebase.database().ref('messages').off()
          }

      
     
  render() {
     
    return (
        <Grid container   direction="column-reverse" justify="center" alignItems="flex-end" >
        
        {
            this.state.post.map(e => {
                return(
                    <Grid key={e.text} item xs={12} sm={6} lg={5} xl={6} style={{ padding: 17 }} >
                        <PaperMessage key={e.id} id={e.id} text={e.text} user={e.user} horario={e.year} imagen={e.picture} avatar={e.user} ></PaperMessage>
                    </Grid>
                )
            })
        }
        </Grid>

       
    );
  }
}
export default ViewMessages;

// {
//     this.state.post.map(e => {
//       return (
       
        
//         <Grid item xs={12} sm={6} lg={5} xl={6} style={{padding: 17}} >
//           <Cardpost texto={e.text} user={e.user} horario={e.year} imagen={e.picture} avatar={e.user} ></Cardpost>
//         </Grid>
       

//       )
//     })
//   }