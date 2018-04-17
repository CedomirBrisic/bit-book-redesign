import React, { Component } from 'react';

export class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  username = (event) => {
    this.setState({ username: event.target.value })
  }

  password = (event) => {
    this.setState({ password: event.target.value })
  }
  logIn = (event) => {
    this.props.logInUser(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render() {
    return (
      <div>
        <form action="">
          <div className="col s8 offset-s1">
            <input id="username" placeholder="Username" type="text" className="padding10" onChange={this.username} value={this.state.username} />
          </div>
          <div className="col s8 offset-s1">
            <input id="password" placeholder="Password" type="password" className="padding10" onChange={this.password} value={this.state.password} />
          </div>
          <a className="waves-effect btn-flat col s4 offset-s8" onClick={this.logIn}><h6> continue</h6></a>

        </form>
      </div>

    )
  }
}