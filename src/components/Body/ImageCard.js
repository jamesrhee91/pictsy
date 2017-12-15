import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CommentForm from './CommentForm'
import CommentBox from './CommentBox'
import './style.css'

class ImageCard extends React.Component {

  state = {
    open: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("this.props from SCU", this.props.pic)
    console.log("nextProps from SCU", nextProps)
    return true
  }

  componentWillReceiveProps(nextProps) {
    console.log("this.props from CWRP", this.props)
    console.log("nextProps from CWRP", nextProps)
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  addComment = (comment) => {
    if (this.props.pic.comments) {
      let length = this.props.pic.comments.length.toString()
      this.props.pic.comments.unshift({ [length]:comment })
    } else {
      this.props.pic.comments = []
      this.props.pic.comments.unshift({ "0":comment })
    }
  }


  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ]

    return (
      <div key={this.props.pic.id} className="image-card" style={{backgroundImage: `url(${this.props.url})`}} onClick={this.handleOpen}>
        <Dialog
          title={this.props.pic.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          bodyClassName="dialog-body"
        >
          <h1>{this.props.pic.title}</h1>
          <img className="image" src={this.props.url} alt={this.props.pic.title} />
          <CommentForm pic={this.props.pic} addComment={this.addComment} />
          <CommentBox comments={this.props.pic.comments}/>
          {/* {this.props.pic.comments ? this.props.pic.comments.map((p, i) => <ul key={i}>{Object.values(p)}</ul>) : null} */}
        </Dialog>
        <div className="overlay"></div>
      </div>
    )
  }
}

export default ImageCard
