import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class CommentForm extends React.Component {

  state = {
    comment: "",
    error: ""
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { picId, addComment } = this.props

    if (/\S/.test(this.state.comment)) {
      addComment(picId, this.state.comment)
      this.setState({ comment: "", error: "" })
    } else {
      this.setState({
        error: "This field is required"
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelText="Write a comment"
            errorText={this.state.error}
            multiLine={false}
            fullWidth={true}
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <RaisedButton type="submit" label="Post" primary={true} style={{float: 'right'}} />
        </form>
      </div>
    )
  }
}
