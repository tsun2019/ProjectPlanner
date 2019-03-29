import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return(
      //container to have surrond form and position it correclty
     <div className="LoginPageContainer">
      <h1>Login Page</h1>
      <form>
        <div> 
          <label for="username">Username: </label>
          <input name="username"/>
        </div>
        <div>
          <label for="password">Password: </label>
          <input name="password"/>
        </div>
        <button>Login</button>
      </form> 
    </div>
    )
  }
}

export default LoginPage;
