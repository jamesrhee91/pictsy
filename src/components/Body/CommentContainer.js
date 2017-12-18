import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commentActions from '../../actions/comments'
import CommentForm from './CommentForm'
import CommentBox from './CommentBox'
import _ from 'lodash'
import './style.css'

class CommentContainer extends React.Component {

  render() {
    const { currentImage, addComment, deleteComment } = this.props
    let display
    if (!currentImage.comments || currentImage.comments.length === 0) {
      display = <h2 className="no-comment">Be the first to comment!</h2>
    } else {
      display = currentImage.comments.map((e, i) => <CommentBox key={i} picId={currentImage.id} idx={i} comment={e} deleteComment={deleteComment} />)
    }
    return (
      <div className="comment-box">
        {display}
        <CommentForm picId={currentImage.id} addComment={addComment} />
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
