import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentChars: 0,
      message: ''
    }
  }

  countChars = (event) => {
    this.setState({
      currentChars: event.target.value.length,
      message: event.target.value
    })
  }

  remainingChars() {
    return (`${this.props.maxChars - this.state.currentChars} of ${this.props.maxChars} characters remaining`)
  }

  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <textarea type="text" name="message" id="message" onChange={this.countChars}/>
        <span> {this.remainingChars()}</span>
      </div>
    );
  }
}

export default TwitterMessage;
