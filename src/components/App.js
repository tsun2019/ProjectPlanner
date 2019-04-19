import React, { Component } from 'react';
import Planner from './Planner';
import ProjectPlannerSetup from './ProjectPlannerSetup.js'
import PlannerOverview from './PlannerOverview';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Dropdown from './Dropdown';
import PrivateRoute from '../PrivateRoute';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { startSetup } from '../actions';
import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends Component {

  render() {
    return(
      <div>
        <header>
          <h1>Project Planner</h1>
          {this.props.loggedIn 
            ? <Dropdown username={this.props.userInfo}/>
            : null}
        </header>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <PrivateRoute exact path='/setup' component={ProjectPlannerSetup}/>
          <PrivateRoute exact path='/planners' component={PlannerOverview}/>
          <Route exact path='/register' component={RegisterPage}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    setup: state.setup,
    loggedIn: state.loggedIn,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(App);

