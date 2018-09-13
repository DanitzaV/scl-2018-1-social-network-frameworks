import React, {Component} from 'react'
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import Muro from './Pages/Muro';
import Login from './Pages/Login';
import PublicarReseña from './Pages/PublicarReseña';
import Reseñas from './Pages/Reseñas';



let singIn = false;
export default class Router extends Component{
    constructor(){
        super();
       
    }
    
    SingIn = () => {
        if(singIn === true){
            return <Redirect to="/home" />
        }else{
            return <Redirect to="/login"/>
        }
    } 
    
    render(){
        
      return(
          <ReactRouter>
              <App>
                  <Route exac path="/" component={this.SingIn} ></Route>
                  <Route path="/home" component={Muro}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/registro" component={Login}></Route>
                  <Route path="/publicar-reseña" component={PublicarReseña}></Route>
                  <Route path="/reseñas" component={Reseñas}></Route>

              </App>
          </ReactRouter>
      )
    
  }
}

