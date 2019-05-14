import React from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const taskSource = {
    beginDrag(props) {
      return {
        taskId: props.Id
      }
    }
  }
  
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function DraggableTask({ connectDragSource, isDragging }) {
  return connectDragSource(
    <div className="TaskContainer">
      {this.props.task} 
    </div>
  )
}






export default DragSource(ItemTypes.TASK, taskSource, collect)(DraggableTask);
