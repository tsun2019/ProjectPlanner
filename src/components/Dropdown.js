import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      dropdown: false
    }
  }
  
  toggleDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    }) 
  };

  closeDropdown = () => {
    this.setState({
      dropdown: false
    })
  }
 
  displayDropdown = () => {
    let menu = ['Your Planners', 'New Planner', 'Drawing Board', 'Sign out'];
    if (this.state.dropdown) {
      return (
        <div className="DropdownContainer">
          <ul onBlur={this.closeDropdown}>
            {menu.map((item, i) => {
              if (i === 0) {
                return <li key={i}><Link to='/planners'>{item}</Link></li>
              }
              else if(i === 1) {
                return <li key={i}><Link to='/setup'>{item}</Link></li>
              }
              else if(item === 'Log out') {
                //when logging out what do i want to do?
                //delete the user's session id from their cookies
                    //- this is safe bc you should always have your id 
                    //in cookies to be logged in  
                //well i guess all you do is delete the session id
                //bc then server should constantly check and if its not there
                // reroute to login page
                // BUT i want to say you ahve sucessfully logged out first.
              }
              else {
                return <li key={i}><Link to='/planners'>{item}</Link></li>
              }
            })}
          </ul>
        </div>
      )
    }
    else{
      return <div></div>
    }
  }


  render() {
    return(
      <div>
        <div className="menu" onClick={this.toggleDropdown}>
          <span>{this.props.username}</span>
          <img src="images/arrow.png" height="20" width="20"/>
        </div>
        {this.displayDropdown()}
      </div> 
    )
  }
}

export default Dropdown;
