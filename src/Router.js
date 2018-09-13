import React, {Component} from 'react'
import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom';
import App from './App';
import Muro from './Pages/Muro';
import Login from './Pages/Login';



export default class Router extends Component{
  render(){
      return(
          <ReactRouter>
              <App>
                  <Route exac path="/" component={Muro}></Route>
                  <Route  path="/login" component={Login}></Route>
                  <Route path="/registro" component={Login}></Route>
                  
              </App>
          </ReactRouter>
      )
  }
}

