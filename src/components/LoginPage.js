import React, { Component } from 'react';
import RegisterPage from './RegisterPage';
import App from './App';
import ProjectPlannerSetup from './ProjectPlannerSetup';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { startSetup, postUserInfo } from '../actions/index.js';
import { login } from '../actions';
import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    /*
    this.state = {
      loggedIn: false
    }
    */
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
      if (response.success) {
        console.log("successful login?");
        this.props.dispatch(login());
        this.props.dispatch(postUserInfo(response.username));
      } else {
        alert(response.msg);
      }
    })
    .catch(error => {
      console.log(error);
    })
    e.target.value = "";
  }


  render() {
    //const loggedIn = this.state.loggedIn;
    if (this.props.loggedIn) {
     /* return (<Route path='/' render={() => {
        <ProjectPlannerSetup/>
      }}/>)*/
      //redirect to /setup
      console.log("Hi");
      return <Redirect to='/setup'/>
    }
    else{
      return(
        //container to have surrond form and position it correclty
      <div className="LoginPageContainer">
        <div className="Login">
          <h1>Login</h1>
          <div className="LoginForm">
            <form>
              <div> 
                <label for="username">Username: </label>
                <input name="username" onChange={this.onUsernameChange}/>
              </div>
              <div>
                <label for="password">Password: </label>
                <input name="password" type="password" onChange={this.onPasswordChange}/>
              </div>
              <button onClick={this.handleLogin}>Login</button>
            </form> 
          </div>
          <div className="RegisterLink">
            <p><Link to='/register'>If you don't have an account sign up here!</Link></p>
          </div>
        </div>
      </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    setup: state.setup,
    loggedIn: state.loggedIn,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(LoginPage);
