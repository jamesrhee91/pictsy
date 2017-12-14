import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


export default class FilterButton extends React.Component {

  state = {
    open: false
  }

  handleClick = (event) => {
  event.preventDefault();

  this.setState({
    open: true,
    anchorEl: event.currentTarget
  })
}

handleRequestClose = () => {
  this.setState({
    open: false,
  })
}

  render() {
    return (
      <div>
        <RaisedButton
            onClick={this.handleClick}
            label={this.props.sort}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem value="Viral" primaryText="Viral" />
              <MenuItem value="Top" primaryText="Top" />
              <MenuItem value="Latest" primaryText="Latest" />
            </Menu>
          </Popover>
      </div>
    )
  }
}
