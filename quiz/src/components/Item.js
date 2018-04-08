import React from 'react';

const Item = (props) => (
    <div className="item">
      <p className="item__text"> {props.itemText}</p>
      <button className='answer__space'>put answer here</button>
    </div>
);

export default Item;
