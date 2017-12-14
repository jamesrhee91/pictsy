import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageCard extends React.Component {

  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }


  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
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
        >
          <img className="image" src={this.props.url} alt={this.props.pic.title} />
        </Dialog>
        <div className="overlay"></div>
      </div>
    )
  }
}

export default ImageCard
