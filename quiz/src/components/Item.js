import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const Types = {
  ITEM: 'answer'
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class Item extends Component {
  render () {
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver

    return connectDropTarget(
      <div className="item">
        <p className="item__text"> {this.props.itemText}</p>
        <button className='answer__space'>put answer here</button>
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, {}, collect)(Item);
