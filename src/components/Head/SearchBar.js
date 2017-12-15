import React from 'react'
import './style.css'
import TextField from 'material-ui/TextField'

export default class SearchBar extends React.Component {

  state = {
    query: ""
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <div id="search-bar-container">
        <TextField
          hintText="Search"
          underlineFocusStyle={{borderColor: 'grey800'}}
        />
      </div>
    )
  }
}
