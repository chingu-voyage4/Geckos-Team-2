import React from 'react';
import Answer from './Answer';
const Answers = (props) => (
  <div>
    {
      props.answers.map((image) => (
        <Answer
          key={image}
          image={image}
        />
      ))
    }
  </div>
);

export default Answers;
