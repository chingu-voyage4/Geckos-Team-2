import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import './Answer.css'

const Types = {
  ITEM: 'answer'
}

const itemSource = {
  beginDrag(props) {
    const item = { answer: props.answer, id: props.id }
    return item
  },

  endDrag(props, monitor, component) {
    const element = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      const item = {...props.answer, id: props.id}
      return props.handleDrop(item)
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Answer extends Component {
  render() {
    const { isDragging, connectDragSource, answer } = this.props
    const opacity = isDragging ? 0.4 : 1

    return connectDragSource (
      <div className="Answer">
        <h1>
          {answer.answer}
        </h1>
      </div>
    )
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(Answer)