import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }
  
  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    }) 
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    }) 
  }

  handleLogin = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    fetch('/login', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    //sucess
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  handleRegister = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    fetch('/login', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    //sucess
    .then(response => 4)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      res.status(204).end();
    })
  }

  render() {
    return (
      <div className = 'loginArea'>
        <form>
          <div>
            username: <input name = "username" onChange = {this.onUsernameChange}/>
          </div>
          <div>
            password: <input name = "password" type = "password" onChange = {this.onPasswordChange}/>
          </div>
          <button onClick = {this.handleLogin}>Login</button>
          <button onClick = {this.handleRegister}>Register</button>
        </form>
      </div>
    )
  }
}

export default Login;
