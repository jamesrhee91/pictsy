import React from 'react'
import './style.css'
import SearchBar from './SearchBar'
import SortButton from './SortButton'

export default class HeadContainer extends React.Component {

  render() {
    return (
      <div id="head">
        <div id="title-wrapper">
          <div className="top">
            <div className="title">P</div>
            <div className="title">I</div>
            <div className="title">C</div>
          </div>
          <div className="top">
            <div className="title">T</div>
            <div className="title">S</div>
            <div className="title">Y</div>
          </div>
        </div>
        <SearchBar />
        <SortButton />
      </div>
    )
  }
}
