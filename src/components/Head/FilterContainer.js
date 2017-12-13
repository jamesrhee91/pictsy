import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class FilterContainer extends React.Component {

  state = {
    value: 1
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    return (
      <SelectField
          floatingLabelText="Sort by"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Viral" />
          <MenuItem value={2} primaryText="Top" />
          <MenuItem value={3} primaryText="Latest" />
        </SelectField>
    )
  }
}

function mapStateToProps(state) {
  return {
    section: state.filter.section,
    sort: state.filter.sort,
    window: state.filter.window,
    page: state.filter.page,
    mature: state.filter.mature
  }
}

export default connect(mapStateToProps)(FilterContainer)
