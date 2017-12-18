import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pictureActions from '../../actions/pictures'
import Checkbox from 'material-ui/Checkbox'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'


class FilterButton extends React.Component {

  updateCheck = () => {
    this.props.filterImages()
  }

  render() {
    return (
      <Checkbox
          checkedIcon={<Visibility />}
          uncheckedIcon={<VisibilityOff />}
          onCheck={this.updateCheck}
          label="NSFW"
          style={{marginTop: "1vh", width: "none"}}
        />
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    mature: state.mature
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(pictureActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)
