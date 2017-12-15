import React from 'react'
import './style.css'

// class CommentBox extends React.Component {
//
//   componentWillReceiveProps(nextProps) {
//     console.log("this.props", this.props)
//     console.log("nextProps", nextProps)
//   }
//
//   render() {
//     return (
//       <div className="comment-box">
//       {this.props.comments ? <ul>{this.props.comments.map((p, i) => <li key={i}>{Object.values(p)}</li>)}</ul> : <h1 className="no-comment">Be the first to comment!</h1>}
//       </div>
//     )
//   }
// }

const CommentBox = ({ comments }) => {
  return (
    <div className="comment-box">
      {comments ? <ul>{comments.map((p, i) => <li key={i}>{Object.values(p)}</li>)}</ul> : <h1 className="no-comment">Be the first to comment!</h1>}
    </div>
  )
}

export default CommentBox
