import React from "react";
import { render } from "react-dom";

let Counter = ({ total }) => (
  <div>
    <h1>Score: {total}</h1>
  </div>
);

class TotalContainer extends React.Component {
  constructor() {
    super()
    this.state = { state: 0 }
  }

  
    render() {
     return this.props.render(
       { total: this.state.total }
      );
    }
  }
  
  render(
    <CountContainer render={(data) => 
      <Counter count={data.total} />
    }
   />, 
  document.getElementById("root"));
