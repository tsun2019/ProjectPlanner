import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PlannerOverview extends Component {
  constructor(props) {
    super(props)
  }

  displayOverview = () => {
    return(
      this.props.overview.map((planner, index) => {
          if (index === 0) { 
            return(
              <div className="plannerOverview0">
                <Link to={`/planner${index + 1}`}><h3>{planner.name}</h3></Link>
                <p>By: {planner.authors}</p>
                <p>{planner.description}</p>
              </div>
            )
          }
          else {
            return(
              <div className="plannerOverview">
                <Link to={`/planner${index + 1}`}><h3>{planner.name}</h3></Link>
                <p>By: {planner.authors}</p>
                <p>{planner.description}</p>
              </div>
            )
          }
      })
    )
  }

  render() {
    return <div className="overviewContainer">{this.displayOverview()}</div>
  }
}

function mapStateToProps(state) {
  return {
    overview: state.overview
  }
}

export default connect(mapStateToProps)(PlannerOverview);
