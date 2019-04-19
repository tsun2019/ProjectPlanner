import React, { Component } from 'react';
import LoginPage from './LoginPage';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { login, postUserInfo } from '../actions/index.js';
import { connect } from 'react-redux';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
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
  
  handleRegister = (e) => {
    e.preventDefault();
    e.target.value = "";
    const username = this.state.username;
    const password = this.state.password; 
    fetch('/register', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    //sucess
    .then(response => response.json())
    .then(response => {
      //probably reroute here to /setup
      if (response.success) {
        if (!this.props.loggedIn) {
          this.props.dispatch(login());
          this.props.dispatch(postUserInfo(response.username));
        }
      }
      else {
        alert(response.msg);
      }
    })
    .catch(error => {
      console.log(error);
    })
    e.target.value = "";
  }
  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/setup'/>
    }
    return(
      <div className="RegisterPageContainer">
        <div className="Register">
          <h1>Sign Up Now!</h1>
          <div className="RegisterForm">
            <form>
              <div>
                <label for="username">Username: </label>
                <input name="username" onChange={this.onUsernameChange}/>
              </div>
              <div>
                <label for="password">Password: </label>
                <input name="password" type="password" onChange={this.onPasswordChange}/>
              </div> 
              <div>
                <label for="confirmPassword">Confirm Password: </label>
                <input name="confirmPassword" type="password"/>
              </div>
              <button onClick={this.handleRegister}>Sign Up</button>
            </form>
          </div>
          <div className="LoginLink">
            <p><Link to='/'>If you already have an account, login here!</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(RegisterPage);
