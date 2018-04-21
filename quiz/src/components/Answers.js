import React from 'react';
import Answer from './Answer';
const Answers = (props) => (
  <div>
    {
      props.answers.map((item, index) => (
        <Answer
          key={index}
          image={item.image}
          text={item.name}
          id={index}
        />
      ))
    }
  </div>
);

export default Answers;
