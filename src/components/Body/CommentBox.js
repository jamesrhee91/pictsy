import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addComment } from '../../actions/comments'
// import * as commentActions from '../../actions/comments'
import CommentForm from './CommentForm'
import './style.css'

class CommentBox extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log("this.props", this.props)
    console.log("nextProps", nextProps)
  }

  shouldComponentUpdate(a, b) {
    return true
  }

  render() {
    const { comments } = this.props
    return (
      <div className="comment-box">
        <CommentForm pic={this.props.pic} addComment={this.props.addComment} />
        {comments.length > 0 ? <ul>{comments.map((p, i) => <li key={i}>{Object.values(p)}</li>)}</ul> : <h1 className="no-comment">Be the first to comment!</h1>}
      </div>
    )
  }
}

const imageSelector = (images, id) => {
  for (let i = 0; i < images.length; i++) {
    if(images[i].id === id) return images[i]
  }
}

const mapStateToProps = (state, ownProps) => {
  // const picId = ownProps.pic.id
  // const images = state.options.images
  // const currentImage = ownProps.pic
  const comments = ownProps.pic.comments || []
  return {
    comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addComment: (picId, comment) => dispatch(addComment(picId, comment))
  }
}

// function mapStateToProps(state, ownProps) {
//   const picId = ownProps.picId
//   const images = state.options.images
//   const currentImage = imageSelector(images, picId)
//   const comments = currentImage.comment || []
//   return {
//     currentImage,
//     comments
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(commentActions, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
