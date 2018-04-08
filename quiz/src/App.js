import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Answers from './components/Answers';


class App extends Component {
  state = {
    items: ['VGA', 'HDMI','USB-A'],
    answers: ['vga', 'usb-a','hdmi']
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Quiz App</h1>
          <h2>Match the Cable to Its Picture</h2>
        </header>
        <div className='container'>
          <div className='item__list'>
            <h2>Items to Match</h2>
            <List items={this.state.items}/>
          </div>
          <div className='answer__list' >
            <h2>Answers</h2>
            <Answers answers={this.state.answers}/>
          </div>
        </div>
      </div>
  );
  }
}
export default App;
