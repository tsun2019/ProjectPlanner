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
    case 'SETUP_FINISH':
      return action 
    default:
      return state
  }
}
const rootReducer = combineReducers({
  weeks,
  tasks,
  setup
})

export default rootReducer;

