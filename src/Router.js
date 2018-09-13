import React, {Component} from 'react'
import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './Pages/Login';
import Muro from './Pages/Muro';
import PublicarReseña from './Pages/PublicarReseña';
import Reseñas from './Pages/Reseñas';


export default class Router extends Component{
  render(){
      return(
          <ReactRouter>
              <App>
                  <Route  path="/login" component={Login}></Route>
                  <Route path="/registro" component={Login}></Route>
                  <Route path="/" component={Muro}></Route>
                  <Route path="/publicar-reseña" component={PublicarReseña}></Route>
                  <Route path="/reseñas" component={Reseñas}></Route>
              </App>
          </ReactRouter>
      )

  }
}

