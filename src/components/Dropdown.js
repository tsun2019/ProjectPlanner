import React, { Component } from 'react';

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
    let menu = ['Your Planners', 'Your Past Sprints', 'Drawing Board'];
    if (this.state.dropdown) {
      return (
        <div className="DropdownContainer">
          <ul onBlur= {this.closeDropdown}>
            {menu.map((item, i) => {
              return <li key={i}>{item}</li> 
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
        <div onClick={this.toggleDropdown} onBlur={this.closeDropdown}>
          <span>{this.props.username}</span>
          <img src="images/arrow.png" height="20" width="20"/>
        </div>
        {this.displayDropdown()}
      </div> 
    )
  }
}

export default Dropdown;
