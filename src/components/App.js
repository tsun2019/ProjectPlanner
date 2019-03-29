import React, { Component } from 'react';
import Planner from './Planner.js';
import ProjectPlannerSetup from './ProjectPlannerSetup.js'
import Login from './Login.js';
import LoginPage from './LoginPage.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { startSetup } from '../actions/index.js';
import rootReducer from '../reducers/index.js';

const store = createStore(rootReducer);

class App extends Component {
  constructor(props) {
    super(props)
  }

  displaySetup = () => {
    this.props.dispatch(startSetup());
  }

  display = () => {
    if (this.props.setup === 'not started') {
      return (
              <button className="startPlanner" onClick={this.displaySetup}>
                Start Planner Setup
              </button>
      )
    }
    else if (this.props.setup === 'started') { 
      return <ProjectPlannerSetup/> 
    }
    else{
      return <Planner/>
    }
  }

  render() {
    return(
      <LoginPage/>
      //<div>
      //  <header>
      //    {this.props.setup.setup == "finished"
      //      ? <h1>{this.props.setup.name}</h1>
      //      : <h1>Project Planner</h1>}
      //    <Login/>
      //  </header>
      //  {this.display()}
      //</div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    setup: state.setup
  }
}

export default connect (mapStateToProps)(App);

