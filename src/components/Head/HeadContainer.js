import React from 'react'
import './style.css'
import SearchBar from './SearchBar'
import FilterContainer from './FilterContainer'

export default class HeadContainer extends React.Component {

  render() {
    return (
      <div id="head">
        <div id="title">ASDKJALSJL</div>
        <SearchBar />
        <FilterContainer />
      </div>
    )
  }
}
