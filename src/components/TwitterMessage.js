import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charRemaining: props.maxChars
    };
  }

  charChange = (e) => {
    let charsRemaining = this.props.maxChars - e.target.value.length
    this.setState({
      [e.target.name]: e.target.value,
      charRemaining: charsRemaining
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.charChange} />
        <p>Remaining Characters: {this.state.charRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
