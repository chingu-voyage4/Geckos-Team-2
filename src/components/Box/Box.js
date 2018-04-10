import React, { Component }from 'react'
import { DropTarget } from 'react-dnd'
import './Box.css'

const Types = {
  ITEM: 'answer'
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class Box extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    
    let message = 'Drag your answer here'
    let secondClass = ''

    if (isActive) {
      message = 'Release to Drop'
      secondClass = 'hover'
    } else if (canDrop) {
      secondClass = 'drag'
    } else if (this.props.isCorrect === 'correct') {
      secondClass = 'correct'
      message = 'Correct'
    } else if (this.props.isCorrect === 'incorrect') {
      secondClass = 'incorrect'
      message = 'Incorrect'
    }

    return connectDropTarget(
      <div className={`Box ${secondClass}`}>
        <p>{message}</p>
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, {}, collect)(Box)