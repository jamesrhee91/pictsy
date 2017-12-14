import React from 'react'
import './style.css'
import SearchBar from './SearchBar'
import FilterButton from './FilterButton'

export default class HeadContainer extends React.Component {

  render() {
    return (
      <div id="head">
        <div id="title">ASDFGH</div>
        <SearchBar />
        <FilterButton />
      </div>
    )
  }
}
