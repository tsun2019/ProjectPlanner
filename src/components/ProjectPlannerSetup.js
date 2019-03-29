import React, { Component } from 'react';
import { finishSetup } from '../actions/index.js';
import { connect } from 'react-redux';

class ProjectPlannerSetup extends Component {
  constructor(props){
    super(props)
  }
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

  render() {
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
}
 
function mapStateToProps(state) {
  return {
    setup: state.setup 
  }
}

export default connect(mapStateToProps)(ProjectPlannerSetup);
