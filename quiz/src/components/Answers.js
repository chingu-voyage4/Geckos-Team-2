import React from 'react';
import Answer from './Answer';
const Answers = (props) => (
  <div>
    {
      props.answers.map((text, index) => (
        <Answer
          key={text}
          text={text}
          id={index}
        />
      ))
    }
  </div>
);

export default Answers;
