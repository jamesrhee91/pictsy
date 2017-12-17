import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { addComment } from '../../actions/comments'
import * as commentActions from '../../actions/comments'
import CommentForm from './CommentForm'
import './style.css'

class CommentBox extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log("this.props", this.props.comments)
    console.log("nextProps", nextProps.pic.comments)
  }

  shouldComponentUpdate(a, b) {
    return true
  }



  render() {
    console.log("comments", this.props.pic.comments)
    const { comments, idx } = this.props
    return (
      <div className="comment-box">
        {this.props.comments ? <ul>{comments.map((p, i) => <li key={i}>{Object.values(p)}</li>)}</ul> : <h1 className="no-comment">Be the first to comment!</h1>}
        <CommentForm idx={idx} addComment={this.props.addComment} />
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   // const picId = ownProps.pic.id
//   // const images = state.options.images
//   // const currentImage = ownProps.pic
//   const idx = ownProps.idx
//   const comments = ownProps.pic.comments || []
//   return {
//     comments,
//     idx
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     addComment: (picId, comment) => dispatch(addComment(picId, comment))
//   }
// }

function mapStateToProps(state, ownProps) {
  const idx = ownProps.idx
  const comments = ownProps.pic.comments || []
  return {
    comments,
    idx
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(commentActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
