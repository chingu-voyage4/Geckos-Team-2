import React from 'react';
const Answer = (props) => (
  <div className="answer">
    <p>{props.text}</p>
    <img src= {props.text.value} alt='' />
  </div>
    );
export default Answer;
