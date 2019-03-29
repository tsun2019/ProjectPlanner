import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
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
      res.status(204).end();
    })

    e.target.value = "";
  }

  handleRegister = (e) => {
    e.preventDefault();
    e.target.value = "";
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
      this.setState({
        loggedIn: true,
        username: response.user.username
      })
    })
    .catch(error => {
      res.status(204).end();
    })
    e.target.value = "";
  }

  displayWelcome = () => {
    if (this.state.loggedIn === true) {
      return <Dropdown username={this.state.username}/>
    }
    else{
      return ( 
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
      )
    }
  }

  render() {
    return <div className='loginArea'>{this.displayWelcome()}</div>
  }
}

export default Login;
