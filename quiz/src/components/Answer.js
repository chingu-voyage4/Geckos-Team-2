import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const Types = {
  ITEM: 'answer'
}

const itemSource = {
  beginDrag(props) {
    const item = {answer: props.text, id:props.id}
    return item
  },

  endDrag(props, monitor, component) {
    const element = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if ( dropResult ) {
      alert(JSON.stringify(element))
    }
  }
}

function collect(connect, monitor) {
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
      <div className="answer" style={{opacity}}>
        <p>{this.props.text}</p>
        <img src= {this.props.text.value} alt={this.props.text} />
      </div>
    )
  }
}

export default  DragSource(Types.ITEM, itemSource, collect)(Answer);
