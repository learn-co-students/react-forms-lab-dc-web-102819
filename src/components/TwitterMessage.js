import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: '',
      count: props.maxChars
    };
  }
  changeMessage = event => {
    // console.log(this.props.maxChars - event.target.value.length)
    let count = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      count: count
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.changeMessage(event)} value={this.state.message}/>
        <p>{this.state.message}</p>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default TwitterMessage;
