import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './actions';

class PrivateRoute extends Component {
  componentWillMount() {
    console.log("private route mounted");
    this.props.dispatch(auth());
  }  

  componentWillReceiveProps(nextProps) {
    console.log("Next props: ", nextProps, "and this.props ", this.props);
    if (!nextProps.authLoading && this.props.authLoading && !nextProps.loggedIn) {
     // console.log("Redirect to login and this.props: ", this.props);
      this.props.history.replace('/');  

    }
  }

  render() {
//    const Component = this.props.component
    const { loggedIn, authLoading } = this.props;
    console.log("AuthLoading: ", authLoading, loggedIn);
    if (authLoading) {
      return null;
    }
    return <Route {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    authLoading: state.authLoading
  }
}


export default withRouter(connect(mapStateToProps)(PrivateRoute));
