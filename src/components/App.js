import React, { Component } from 'react';
import Planner from './Planner.js';
import Login from './Login.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index.js';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return(
      <Provider store = {store}>
        <div>
          <header>
            <h1>Project Planner</h1> 
            <Login/>
          </header>
          <Planner/>
        </div>
      </Provider>
    );
  }
}

export default App;

