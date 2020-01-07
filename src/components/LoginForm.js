import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    // console.log(props.handleLogin)
    this.state = {
      username: '',
      password: ''
    };
  }

  updateUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  updatePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

//doge
  render() {
    return (
      <form onSubmit={e =>
        {e.preventDefault()
        this.state.username === '' || this.state.password === ''
          ? alert('Must fill the fields')
          : this.props.handleLogin(this.state.username, this.state.password)}
        }

        >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => this.updateUsername(e)} value= {this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => this.updatePassword(e)} value={this.state.password}/>
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
