import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as picturesActions from '../../actions/pictures'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem';

class SortButton extends React.Component {

  handleChange = (event, index, value) => {
    event.preventDefault()
    this.props.sortImages(value)
  }

  render() {
    return (
      <div>
        <DropDownMenu value={this.props.currentSort} onChange={this.handleChange}>
          <MenuItem value="MOST_VIEWS" primaryText="Most Views" />
          <MenuItem value="MOST_UPVOTES" primaryText="Most Upvotes" />
          <MenuItem value="MOST_FAV" primaryText="Most Fav" />
          <MenuItem value="LATEST" primaryText="Latest" />
        </DropDownMenu>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    images: state.options.images,
    currentSort: state.options.currentSort,
    mature: state.options.mature
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(picturesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortButton)
