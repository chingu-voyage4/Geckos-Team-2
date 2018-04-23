import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import './App.css';
import Answers from './components/Answers';
import Item from './components/Item'

// Import images
import vga      from './components/images/vga.jpg'
import hdmi     from './components/images/hdmi.jpg'
import usbA     from './components/images/usb-a.jpg'
import dvi      from './components/images/dvi.jpg'
import usbB     from './components/images/usb-b.jpg'
import usbMini  from './components/images/usb-mini.jpg'
import usbMicro from './components/images/usb-micro.jpg'
import firewire  from './components/images/firewire.jpg'
import db9      from './components/images/db-9.jpg'

class App extends Component {
  state = {
    items: [
      {answer: 'VGA',       dropAnswer: null, isCorrect: null},
      {answer: 'HDMI',      dropAnswer: null, isCorrect: null},
      {answer: 'USB-A',     dropAnswer: null, isCorrect: null},
      {answer: 'DVI',       dropAnswer: null, isCorrect: null},
      {answer: 'USB-B',     dropAnswer: null, isCorrect: null},
      {answer: 'USB-MINI',  dropAnswer: null, isCorrect: null},
      {answer: 'USB-MICRO', dropAnswer: null, isCorrect: null},
      {answer: 'FIREWIRE',  dropAnswer: null, isCorrect: null},
      {answer: 'DB-9',      dropAnswer: null, isCorrect: null},
    ],
    answers: [
      {name: 'VGA',       image: vga},
      {name: 'HDMI',      image: hdmi},
      {name: 'USB-A',     image: usbA},
      {name: 'DVI',       image: dvi},
      {name: 'USB-B',     image: usbB},
      {name: 'USB-MINI',  image: usbMini},
      {name: 'USB-MICRO', image: usbMicro},
      {name: 'FIREWIRE',  image: firewire},
      {name: 'DB-9',      image: db9},
    ],

    buttonClicked: false
  }

  handleDrop = (index, element) => {
    let updateItems = this.state.items

    // Add the select answer in dropAnswer in array items
    updateItems[index].dropAnswer = element.answer
    updateItems[index].isCorrect =
      updateItems[index].answer === element.text
        ? true
        : false

    this.setState({
      items: updateItems
    })
  }

  handleScore = () => {
    let clicked = this.state.buttonClicked

    clicked = true

    this.setState({
      buttonClicked: clicked
    })
  }
  handleClearAnswers = () => {
    this.setState({
      items: [
        {answer: 'VGA',       dropAnswer: null, isCorrect: null},
        {answer: 'HDMI',      dropAnswer: null, isCorrect: null},
        {answer: 'USB-A',     dropAnswer: null, isCorrect: null},
        {answer: 'DVI',       dropAnswer: null, isCorrect: null},
        {answer: 'USB-B',     dropAnswer: null, isCorrect: null},
        {answer: 'USB-MINI',  dropAnswer: null, isCorrect: null},
        {answer: 'USB-MICRO', dropAnswer: null, isCorrect: null},
        {answer: 'FIREWIRE',  dropAnswer: null, isCorrect: null},
        {answer: 'DB-9',      dropAnswer: null, isCorrect: null},
      ]
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
              this.state.items.map(({ answer, dropAnswer, isCorrect }, index) => (
                <Item
                  itemText={answer}
                  dropAnswer={dropAnswer}
                  handleDrop={item => this.handleDrop(index, item)}
                  key={index}
                  clicked={this.state.buttonClicked}
                  isCorrect={isCorrect}
                />
              ))
            }
          </div>
          <div className='answer__list' >
            <h2>Answers</h2>
            <Answers
              answers={this.state.answers}
            />
            <button className="button" onClick={this.handleScore}>Check Answers</button>
            <div></div>
            <button className="button" onClick={this.handleClearAnswers}>Clear Answers</button>
          </div>
          </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
