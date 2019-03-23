import React, { Component } from 'react';
import Day from './Day.js';

class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'TestWeekComponent'
    }
  }

  render() {
    return(
      
      <div className = "WeekContainer">
        <Day name = 'Sunday'/>
        <Day name = 'Monday'/>
        <Day name = 'Tuesday'/>
        <Day name = 'Wednesday'/>
        <Day name = 'Thursday'/>
        <Day name = 'Friday'/>
        <Day name = 'Saturday'/>
      </div>
    )
  }
}

export default Week;


