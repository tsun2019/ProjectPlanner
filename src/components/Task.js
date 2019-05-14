import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props)
  }
  /*
   dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  componentDidMount() {
    this.dragElement(document.getElementById("TaskContainer"))
  }
  componentDidUpdate() {
    this.dragElement(document.getElementById("TaskContainer"))
  }
*/
  render() {
    return(
      <div className= "TaskContainer">{this.props.desc}</div>
    
    )
  
  }

}

export default Task;
