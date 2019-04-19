import React, { Component } from 'react';
import Planner from './Planner';
import { startSetup, finishSetup, restartSetup } from '../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class ProjectPlannerSetup extends Component {
  /* Handle all inputs*/
  onName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onAuthors = (e) => {
    this.setState({
      authors: e.target.value
    })
  }

  onDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  onSprintLength = (e) => {
    this.setState({
      sprintLength: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const authors = this.state.authors;
    const description = this.state.description;
    const sprintLength = this.state.sprintLength;
    e.target.value = "";
    this.props.dispatch(finishSetup(name, authors, description, sprintLength));
  }


  displaySetup = () => {
    this.props.dispatch(startSetup());
  }
  
  render() {
    const setup = this.props.setup;
    if (setup === 'not started') {
     return (
      <div className="startPlannerMargin">
        <div className="startPlanner">
          <h4>Start your Planner!</h4>
        </div>
        <div className="startPlanner">
          <button onClick={this.displaySetup}>
            Planner Setup
          </button>
        </div>
      </div>
     ) 
    }
    else if (setup == 'started') {
      return (
        <div className="plannerSetup">
          <form>
            <h4><u> Project Planner Setup </u></h4>
            <div>
              Project Name: <input name="projectName" onChange={this.onName}/>
            </div>
            <div>
              Project Author(s): <input name="authors" onChange={this.onAuthors}/>
            </div>
            <div>
              Project Description: <input name="description" onChange={this.onDescription}/>
            </div>
            <div>
              {/*Sprint Lengths (in days): <input name="sprintLength" type="number" onChange={this.onSprintLength}/>*/}
            </div>
            <button onClick={this.handleSubmit}>Create Planner</button>
          </form> 
        </div>
      )
    }
    else {
      this.props.dispatch(restartSetup())
      return <Redirect to='/planners'/>
    }
  }
}
 
function mapStateToProps(state) {
  return {
    setup: state.setup,
    overview: state.overview
  }
}

export default connect(mapStateToProps)(ProjectPlannerSetup);
