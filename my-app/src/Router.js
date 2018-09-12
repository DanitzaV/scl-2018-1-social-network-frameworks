import React, {Component} from 'react'
import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom';
import App from './App';
import Login from './Pages/Login';
import Muro from './Pages/Muro';
import FormRegistro from './Componentes/Registro/Form';


export default class Router extends Component{
  render(){
      return(
          <ReactRouter>
              <App>
                  <Route exact path="/" component={Login}></Route>
                  <Route path="/muro" component={Muro}></Route>
                  <Route path="/registro" component={FormRegistro}></Route>
              </App>
          </ReactRouter>
      )
  }
}

