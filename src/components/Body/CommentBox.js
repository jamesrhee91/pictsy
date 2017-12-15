import React from 'react'
import './style.css'

const CommentBox = ({ comments }) => {
  return (
    <div className="comment-box">
      {comments ? <ul>{comments.map((p, i) => <li key={i}>{Object.values(p)}</li>)}</ul> : <h1 className="no-comment">Be the first to comment!</h1>}
    </div>
  )
}

export default CommentBox
