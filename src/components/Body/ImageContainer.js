import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as picturesActions from '../../actions/pictures'
import ImageCard from './ImageCard'



class ImageContainer extends React.Component {

  componentDidMount() {
    this.props.getImages(this.props)
  }

  render() {

    const images = this.props.images.map(pic => {
      if (pic.images) {
        return <ImageCard key={pic.id} pic={pic} url={pic.images[0]["link"]} />
      } else {
        return <ImageCard key={pic.id} pic={pic} url={pic.link} />
      }
      return <div key={pic.id} className="image" style={{backgroundImage: `url(https://i.imgur.com/${pic.cover}.jpg)`}}></div>
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
  return bindActionCreators(picturesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
