import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  handleChange = (event) => {
    this.setState ( 
      {
        input: event.target.value
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} onChange={this.handleChange}/>
        {this.props.maxChars - this.state.input.length}/280
      </div>
    );
  }
}

export default TwitterMessage;
