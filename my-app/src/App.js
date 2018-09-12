import React, { Component } from 'react';


// import Login from './Componentes/Login';
import { MuiThemeProvider } from '@material-ui/core/styles/MuiThemeProvider';



class App extends Component {
 
  render() {
    return (
       
          <div>
          {this.props.children}
          </div>
          
      

       
    );
  }
}

export default App;
