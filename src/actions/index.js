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
    setup: 'started'
  }
}

export const finishSetup = (name, authors, description, sprintLengths) => {
  return {
    type: 'SETUP_FINISH',
    setup: 'finished',
    name: name,
    authors: authors,
    description: description,
    sprintLengths: sprintLengths
  }
}
