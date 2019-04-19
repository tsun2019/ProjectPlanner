import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';
import ReduxThunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//before this all express server set up then react starts here
ReactDOM.render(
  <Provider store = {store}> 
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));

