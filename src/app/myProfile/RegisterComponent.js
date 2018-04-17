import React, { Component } from 'react';
import { RegisterForm } from "../services/register"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      email: "",

    }
  }

  userName = (event) => {
    this.setState({ username: event.target.value })
  }
  nameOfUser = (event) => {
    this.setState({ name: event.target.value })
  }
  passwordOfUser = (event) => {
    this.setState({ password: event.target.value })
  }
  emailOfUser = (event) => {
    this.setState({ email: event.target.value })
  }

  registerUser = () => {

    const username = this.state.username;
    const name = this.state.name;
    const password = this.state.password;
    const email = this.state.email;
    this.props.registerUser(username, password, name, email)
  }


  render() {
    return (
      <div>

          <div class="input-field col s8 offset-s1">
            <input id="username" placeholder="Username" type="text" onChange={this.userName} value={this.state.username} />
          </div>
          <div class="input-field col s8 offset-s1">
            <input id="first_name" type="text" placeholder="Full Name" onChange={this.nameOfUser} value={this.state.name} />
          </div>
          <div className="input-field col s8 offset-s1">
            <input id="password" type="password" placeholder="Password" onChange={this.passwordOfUser} value={this.state.password} />
          </div>
          <div className="input-field col s8 offset-s1">
            <input id="email" type="email" placeholder="Email" onChange={this.emailOfUser} value={this.state.email} />
          </div>
        <a className="col s6 offset-s5 waves-effect btn-flat" onClick={this.registerUser}><h6>Send Application</h6></a>

      </div>

    )
  }
}

export { Register }