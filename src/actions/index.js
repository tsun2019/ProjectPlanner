export const login = () => {
  return {
    type: 'LOGIN',
  }
}

export const postUserInfo = (username) => {
  return {
    type: 'POST_USER_INFO',
    username: username
  }
}

export const addWeek = () => {
  return {
    type: 'WEEK_ADD',
    week: {hidden: false}
  }
}

export const addTask = (task) => {
  return {
    type: 'TASK_ADD',
    task: task
  }
}

export const startSetup = () => {
  return {
    type: 'SETUP_START',
  }
}

export const restartSetup = () => {
  return {
    type: 'SETUP_RESTART',
  }
}

export const finishSetup = (name, authors, description, sprintLength) => {
  return {
    type: 'SETUP_FINISH',
    setup: 'finished',
    name: name,
    authors: authors,
    description: description,
    sprintLengths: sprintLength
  }
}

const authStart = () => {
 return {
  type: "AUTH_START"
 }    
}

export const auth = () => {
  return (dispatch) => {
    dispatch(authStart())
    fetch('/auth', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
//      dispatch(authStart())
      response.json()
    })
    .then(response => {
      console.log(response)
    })
  }
}


