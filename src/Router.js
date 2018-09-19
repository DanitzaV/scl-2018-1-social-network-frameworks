import React, {Component} from 'react'
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import Muro from './Pages/Muro';
import Login from './Pages/Login';
import PublicarReseña from './Pages/PublicarReseña';
import Reseñas from './Pages/Reseñas';
import app from './base';
import RegistroFB from './Pages/RegistroFB';




export default class Router extends Component{
    constructor(){
        super();
     
      this.state = {
        user: null
      }
    }

    componentDidMount(){
     return app.auth().onAuthStateChanged((user) => {
      console.log(user)
       user ? this.setState({user: user})  : this.setState({user: null})
      })
    }
    
   

    render(){
        
      return(
          <ReactRouter>
              <App>
                  <Route path="/" component={() => {
                return this.state.user !== null ? <Redirect to="/home"></Redirect> : <Redirect to="/login"></Redirect>
                  
                  }}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/home" component={Muro}></Route>
                  <Route path="/registro" component={RegistroFB}></Route>
                  <Route path="/publicar-reseña" component={PublicarReseña}></Route>
                  <Route path="/reseñas" component={Reseñas}></Route>
                    
              </App>
          </ReactRouter>
      )
    
  }
}

