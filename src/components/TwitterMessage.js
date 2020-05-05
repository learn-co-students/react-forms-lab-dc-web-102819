import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 0
    };
  }

  changeLength=()=>{
    this.setState({
      maxChars : this.state.maxChars+1
    })
  }

  render() {
    console.log(this.state.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeLength} />
        {this.props.maxChars - this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
