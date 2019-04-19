import React, { Component } from 'react';
import Week from './Week.js';
import Task from './Task.js';
import Draggable from './Draggable.js';
import { addWeek } from '../actions/index.js';
import { addTask } from '../actions/index.js';
import { connect } from 'react-redux';

class Planner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hideTask: true
    }
  }
 

  /*Might want to set up routes here so I can create routes with arbitrary X
   * such as planner/X that route to specific planner*/
  componentDidMount() { 
    let i = 0;
    //let sprintLength = Number(this.props.setup.sprintLengths);
    while (i < 2) {
      this.props.dispatch(addWeek())
      i++;
    }
  }


  handleKeyPress = (e) => {
   if (e.key === 'Enter') {
      this.props.dispatch(addTask(e.target.value));
      e.target.value = '';
      this.toggleInputOrBtn()
   } 
  }

  toggleInputOrBtn = () => {
    this.setState({
      hideTask: !this.state.hideTask
    })
  }

  displayTaskActions = () => {
    if (this.state.hideTask === false){
      return <input onKeyPress = {this.handleKeyPress}/>
    }
    else if (this.props.weeks.length !== 0){
      return <button onClick = {this.toggleInputOrBtn}>Add Task</button>
    }
  }

  displayWeeks = () => {
    return this.props.weeks.map((week) => {
      if (week.hidden === false) {
        return <Week/>
      } 
    })
  }

  displayTasks = () => {
    return this.props.tasks.map((task) => {
      return <Draggable desc = {task}/>
    })
  }
  
  render() {
    return(
      <div className = "PlannerContainer">
        <div>
          {this.displayWeeks()}
        </div>
        <div id = 'TaskInputBtn'>
          {this.displayTaskActions()}
        </div>
        <div>
          {this.displayTasks()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    weeks: state.weeks,
    tasks: state.tasks,
    setup: state.setup
  }

}
export default connect(mapStateToProps)(Planner);
