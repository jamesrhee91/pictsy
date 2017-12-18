import React from 'react'
import SearchBar from './SearchBar'
import SortButton from './SortButton'
import FilterButton from './FilterButton'
import './style.css'

export default class HeadContainer extends React.Component {

  render() {
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
          <SortButton />
          <FilterButton />
        </div>
      </div>
    )
  }
}
