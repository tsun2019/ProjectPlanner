import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './actions';

class PrivateRoute extends Component {
  componentWillMount() {
    console.log("private route mounted");
    this.props.dispatch(auth());
  }  

  render() {
//    const Component = this.props.component
    const loggedIn = this.props.loggedIn;
    console.log(loggedIn);
    if (loggedIn) {
      return <Route {...this.props}/>
    }
    else {
      return <Redirect to='/'/>
    }
  }
}

function mapStateToProps(state) {
  return {loggedIn: state.loggedIn}
}


export default connect(mapStateToProps)(PrivateRoute);
