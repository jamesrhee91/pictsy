import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as imageActions from '../../actions/images'


class ImageContainer extends React.Component {

  componentDidMount() {
    this.props.getImages(this.props)
  }

  render() {
    const images = this.props.images.map(pic => {
      if (pic.images) {
        return <a href={pic.link}><div key={pic.id} className="image" style={{backgroundImage: `url(${pic.images[0]["link"]})`}}></div></a>
      } else {
        return <a href={pic.link}><div key={pic.id} className="image" style={{backgroundImage: `url(${pic.link})`}}></div></a>
      }
      // return <div key={pic.id} className="image" style={{backgroundImage: `url(https://i.imgur.com/${pic.cover}.jpg)`}}></div>
    })
    return (
      <div className="image-wrapper">
        {images}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    images: state.filter.images,
    section: state.filter.section,
    sort: state.filter.sort,
    window: state.filter.window,
    page: state.filter.page,
    mature: state.filter.mature
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(imageActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
