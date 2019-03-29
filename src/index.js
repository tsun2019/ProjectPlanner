import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

//before this all express server set up then react starts here
ReactDOM.render(<Provider store = {store}> <App /></Provider>
  , document.getElementById('root'));

