import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import './App.css';
import Answers from './components/Answers';
import Item from './components/Item'

class App extends Component {
  state = {
    items: [
      {answer: 'VGA', dropAnswer: null},
      {answer: 'HDMI', dropAnswer: null},
      {answer: 'USB-A', dropAnswer: null},
    ],
    answers: ['vga', 'usb-a','hdmi'],
  }

  handleDrop = (index, element) => {
    let updateItems = this.state.items
    let newAnswers = this.state.answers

    // Delete element in answers array
    newAnswers.splice(element.id, 1)

    // Add the select answer in dropAnswer in array items
    updateItems[index].dropAnswer = element.answer

    this.setState({
      items: updateItems,
      answers: newAnswers
    })
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
            {
              this.state.items.map(({ answer, dropAnswer }, index) => (
                <Item
                  itemText={answer}
                  dropAnswer={dropAnswer}
                  handleDrop={item => this.handleDrop(index, item)}
                  key={index}
                />
              ))
            }
          </div>
          <div className='answer__list' >
            <h2>Answers</h2>
            <Answers
              answers={this.state.answers}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
