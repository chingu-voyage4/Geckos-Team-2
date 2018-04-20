import React from 'react';
import Answer from './Answer';
const Answers = (props) => (
  <div>
    {
      props.answers.map((image, index) => (
        <Answer
          key={index}
          image={image}
          id={index}
        />
      ))
    }
  </div>
);

export default Answers;
