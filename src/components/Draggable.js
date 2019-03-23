import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Task from './Task.js';

export default class Draggable extends Component {
  state = {
    isDragging: false,
    initialX: 0,
    initialY: 0,
    translateX: 0,
    translateY: 0,
    lastTranslateX: 0,
    lastTranslateY: 0
  };

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = ({ clientX, clientY }) => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState({
      initialX: clientX,
      initialY: clientY,
      isDragging: true
    });
  };

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { onDrag } = this.props;

    if (!isDragging) {
      return;
    }

    this.setState(prevState => ({
      translateX: clientX - prevState.initialX + prevState.lastTranslateX,
      translateY: clientY - prevState.initialY + prevState.lastTranslateY
    }), () => {
      if (onDrag) {
        onDrag({
          translateX: this.state.translateX,
          translateY: this.state.translateY
        });
      }
    });
  };

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState({
      initialX: 0,
      initialY: 0,
      lastTranslateX: this.state.translateX,
      lastTranslateY: this.state.translateY,
      isDragging: false
    },
    () => {
      if (this.props.onDragEnd) {
        this.props.onDragEnd();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { translateX, translateY, isDragging} = this.state;
    return(
      <Container
        onMouseDown = {this.handleMouseDown}
        x = {translateX}
        y = {translateY}
        isDragging = {isDragging}
      > 
        <Task desc = {this.props.desc}/>
        {children}
      </Container>
    )
  }
}

const Container = styled.div.attrs({
  style: ({ x, y }) => ({
    transform: `translate(${x}px, ${y}px)`
  }),
})`
  cursor: grab;
  user-select: none;
  ${({ isDragging }) => 
  isDragging && css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`;
