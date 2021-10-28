import React from 'react';

class IconButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    return (
      <a onClick={this.handleClick}>
        <div style={this.props.style}>
          Play
        </div>
      </a>
    );
  }
}

export default IconButton;