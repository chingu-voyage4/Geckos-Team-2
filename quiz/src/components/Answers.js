import React from 'react';
import Answer from './Answer';
const Answers = (props) => (
  <div>
    {
      props.answers.map((answer, index) => (
        <Answer
          key={answer}
          text={answer}
          id={index}
        />
      ))
    }
  </div>
);

export default Answers;
