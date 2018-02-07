import React from 'react'
import IconButton from 'material-ui/IconButton'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionEdit from 'material-ui/svg-icons/image/edit'
import { red400, lightBlue400 } from 'material-ui/styles/colors'


export default class CommentBox extends React.Component {

  handleDelete = (event) => {
    event.preventDefault()
    const { deleteComment, picId, idx } = this.props
    deleteComment(picId, idx)
  }

  handleEdit = () => {
    const { deleteComment, picId, idx } = this.props
    
    console.log("edit comment", idx)
  }

  render() {
    const { comment } = this.props
    return (
      <div className="comment-wrapper">
        <div className="comment">
          {Object.values(comment)}
        </div>
        <IconButton style={{float: 'right'}} onClick={this.handleEdit}>
          <ActionEdit color={lightBlue400} />
        </IconButton>
        <IconButton style={{float: 'right'}} onClick={this.handleDelete}>
          <ActionDelete color={red400} />
        </IconButton>
      </div>
    )
  }
}
