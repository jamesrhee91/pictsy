import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeadContainer from './components/Head/HeadContainer'
import ImageContainer from './components/Body/ImageContainer'

class App extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <HeadContainer />
          <ImageContainer />
        </MuiThemeProvider>
      </div>
    );
  }

}

export default App;
