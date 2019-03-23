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
