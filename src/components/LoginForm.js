import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  handleLogin = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) 
    return this.props.handleLogin(this.state)

  }

  render() {
    return (
      <form onSubmit={this.props.handleLogin} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
