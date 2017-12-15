import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as picturesActions from './actions/pictures'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeadContainer from './components/Head/HeadContainer'
import ImageContainer from './components/Body/ImageContainer'

class App extends Component {

  componentDidMount() {
    this.props.getImages(this.props)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <HeadContainer />
          <ImageContainer images={this.props.images} />
        </MuiThemeProvider>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    images: state.options.images,
    mature: state.options.mature
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(picturesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
