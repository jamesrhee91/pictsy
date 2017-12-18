import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commentActions from '../../actions/comments'
import CommentForm from './CommentForm'
import _ from 'lodash'
import './style.css'

class CommentContainer extends React.Component {

  render() {
    const { currentImage, comments } = this.props
    return (
      <div className="comment-box">
        {this.props.currentImage.comments ? <ul>{this.props.currentImage.comments.map((p, i) => <li key={i}>{Object.values(p)}</li>)}</ul> : <h1 className="no-comment">Be the first to comment!</h1>}
        <CommentForm picId={currentImage.id} addComment={this.props.addComment} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const currentImage = ownProps.pic
  const comments = _.get(state, 'comments', [])
  return {
    currentImage,
    comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(commentActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
