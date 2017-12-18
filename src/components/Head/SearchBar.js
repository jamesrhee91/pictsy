import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pictureActions from '../../actions/pictures'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import { grey800 } from 'material-ui/styles/colors'
import './style.css'


class SearchBar extends React.Component {

  state = {
    query: "",
    error: ""
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { searchImages } = this.props

    if (/\S/.test(this.state.query)) {
      searchImages(this.state.query)
      this.setState({ query: "", error: "" })
    } else {
      this.setState({ error: "Please enter a valid search query" })
    }
  }

  render() {
    return (
      <div id="search-bar-container">
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.query}
            errorText={this.state.error}
            hintText="Search"
            onChange={this.handleChange}
            underlineFocusStyle={{borderColor: grey800}}
          />
          <IconButton type="submit">
            <ActionSearch />
          </IconButton>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(pictureActions, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
