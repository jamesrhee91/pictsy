import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pictureActions from './actions/pictures'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeadContainer from './components/Head/HeadContainer'
import ImageContainer from './components/Body/ImageContainer'

class App extends Component {

  componentDidMount() {
    this.props.getImages()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HeadContainer />
          <ImageContainer filtered={this.props.filtered} />
        </div>
      </MuiThemeProvider>
    );
  }

}

function mapStateToProps(state) {
  return {
    filtered: state.filtered
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(pictureActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
