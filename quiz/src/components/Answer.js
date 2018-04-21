import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const Types = {
  ITEM: 'answer'
}

const itemSource = {
  beginDrag(props) {
    const item = {answer: props.image, text:props.text, id:props.id}
    return item
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
    const { isDragging, connectDragSource, image, text} = this.props
    const opacity = isDragging ? 0.4 : 1

    return connectDragSource (
      <div className="answer" style={{opacity}}>
        <img src={image} alt={text} />
      </div>
    )
  }
}

export default  DragSource(Types.ITEM, itemSource, collect)(Answer);
