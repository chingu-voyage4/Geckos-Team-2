import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Answer from './Answer'

const Types = {
  ITEM: 'answer'
}

const itemTarget = {
  drop(props, monitor) {
    props.handleDrop(monitor.getItem())
  }
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
    const { canDrop, isOver, connectDropTarget, dropAnswer } = this.props
    const isActive = canDrop && isOver

    return connectDropTarget(
      <div className="item">
        <p className="item__text"> {this.props.itemText}</p>

        {
          dropAnswer
          ? (<Answer image={dropAnswer}/>)
          : (<button className='answer__space'>put answer here</button>)
        }
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, itemTarget, collect)(Item);
