import React from 'react';
import Item from './Item';

const List = (props) => (
    <div>
      {
        props.items.map((item, index) => (
          <Item
            key={item}
            itemText={item}
            count={index + 1}
          />
        ))
      }
    </div>
  );
export default List;
