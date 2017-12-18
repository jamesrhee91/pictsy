import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as picturesActions from '../../actions/pictures'
import SearchBar from './SearchBar'
import SortButton from './SortButton'
import FilterButton from './FilterButton'
import './style.css'

class HeadContainer extends React.Component {

  render() {
    const { sortImages, currentSort, filterImages } = this.props
    return (
      <div id="head">
        <div id="title-container">
          <div className="title-wrapper">
            <div className="title">P</div>
            <div className="title">I</div>
            <div className="title">C</div>
          </div>
          <div className="title-wrapper">
            <div className="title">T</div>
            <div className="title">S</div>
            <div className="title">Y</div>
          </div>
        </div>
        <SearchBar />
        <div className="button-wrapper">
          <SortButton sortImages={sortImages} currentSort={currentSort} />
          <FilterButton filterImages={filterImages} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentSort: state.currentSort
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(picturesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadContainer)
