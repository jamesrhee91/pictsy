import React from 'react'
import './style.css'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as picturesActions from '../../actions/pictures'
import ImageCard from './ImageCard'



export default class ImageContainer extends React.Component {

  // componentDidMount() {
  //   this.props.getImages(this.props)
  // }

  render() {
    const images = this.props.images.map(pic => {
      if (pic.images[0]) {
        return <ImageCard key={pic.id} pic={pic} url={pic.images[0]["link"]} />
      } else {
        return <ImageCard key={pic.id} pic={pic} url={pic.link} />
      }
    })
    return (
      <div className="image-wrapper">
        {images}
      </div>
    )
  }
}


// function mapStateToProps(state) {
//   return {
//     images: state.filter.images
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(picturesActions, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
