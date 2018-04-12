import React from 'react';
import Answer from './Answer';
const Answers = (props) => (
  <div>
    {
      props.answers.map((text) => (
        <Answer
          key={text}
          text={text}
        />
      ))
    }
  </div>
);

export default Answers;
