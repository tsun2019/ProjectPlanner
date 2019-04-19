import { combineReducers } from 'redux';

const weeks = (state = [], action) => {
  switch(action.type) {
    case 'WEEK_ADD':
      return [...state, action.week]
    default:
      return state;
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD':
      return [...state, action.task]
    default:
      return state
  }
}

const setup = (state = 'not started', action) => {
  switch (action.type) {
    case 'SETUP_START':
      return 'started'
    case 'SETUP_RESTART':
      return 'not started'
    case 'SETUP_FINISH':
      return action 
    default:
      return state
  }
}

const overview = (state = [], action) => {
  switch (action.type) {
    case 'SETUP_FINISH':
      return [...state, action]
    default:
      return state
  }
}

const loggedIn = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN':
      return true
    default:
      return state
  }
}

const authCheck = (state = false, action) => {
  switch(action.type) {
    case 'AUTH_START':
      return true
    default:
      return state
  }
}

const userInfo = (state = '', action) => {
  switch(action.type) {
    case 'POST_USER_INFO':
      return action.username
    default:
      return state
  }
}

const rootReducer = combineReducers({
  weeks,
  tasks,
  setup,
  loggedIn,
  userInfo,
  overview,
  authCheck
})

export default rootReducer;

