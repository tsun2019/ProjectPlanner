import React, { Component } from 'react';

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'TestDayComponent',
    }
  }

  render() {
    return(
      <div className = "DayContainer">
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default Day;
