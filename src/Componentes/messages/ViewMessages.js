import React, { Component } from 'react';
import { TextField, Button, Input, Grid } from '@material-ui/core';
import firebase from './../../base';
import PaperMessage from './PaperMessage';



class ViewMessages extends Component {
    constructor(){
      super();
      this.state = {
        post: [],
        avatar: '',
        activo: false
      }
    }
        componentWillMount(){
          firebase.database().ref('messages')
            .limitToLast(10)
            .on('child_added', (newPost) => {
              console.log(newPost.val())
              let message = { text: newPost.val().text, id: Date.now(),user: newPost.val().creatorcorreo, year: newPost.val().year , picture: newPost.val().picture, creator: newPost.val().creator};
      this.setState({ post: [message].concat(this.state.post) });

      firebase.auth().onAuthStateChanged((user) => {if(user.uid == newPost.val().creatorcorreo){
          return this.setState({activo: true})
      }else {
        return this.setState({activo: false})
      }
    })
            })

            
           
        }

      
     
  render() {
      const niu =  <Grid container   direction="column-reverse" justify="center" alignItems="flex-start" >
        
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

      const jeje =  <Grid container   direction="column-reverse" justify="center" alignItems="flex-end" >
        
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
     
   
     const emailse = this.state.post.map(e => e.user)
    return (
      <Grid>
          {
               this.state.activo ? niu : jeje
          }
      </Grid>

       
    );
  }
}
export default ViewMessages;

//   <Grid container   direction="column-reverse" justify="center" alignItems="center" >
        
//         {
//             this.state.post.map(e => {
//                 return(
//                     <Grid key={e.text} item xs={12} sm={6} lg={5} xl={6} style={{ padding: 17 }} >
//                         <PaperMessage key={e.id} id={e.id} text={e.text} user={e.user} horario={e.year} imagen={e.picture} avatar={e.user} ></PaperMessage>
//                     </Grid>
//                 )
//             })
//         }
//         </Grid>

// {
//     this.state.post.map(e => {
//       return (
       
        
//         <Grid item xs={12} sm={6} lg={5} xl={6} style={{padding: 17}} >
//           <Cardpost texto={e.text} user={e.user} horario={e.year} imagen={e.picture} avatar={e.user} ></Cardpost>
//         </Grid>
       

//       )
//     })
//   }