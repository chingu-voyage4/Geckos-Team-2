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
      {answer: 'VGA',       dropAnswer: null},
      {answer: 'HDMI',      dropAnswer: null},
      {answer: 'USB-A',     dropAnswer: null},
      {answer: 'DVI',       dropAnswer: null},
      {answer: 'USB-B',     dropAnswer: null},
      {answer: 'USB-MINI',  dropAnswer: null},
      {answer: 'USB-MICRO', dropAnswer: null},
      {answer: 'FIREWIRE',  dropAnswer: null},
      {answer: 'DB-9',      dropAnswer: null},
    ],
    answers: [
      vga,      hdmi,    usbA,
      dvi,      usbB,    usbMini,
      usbMicro, firewire, db9
    ],
  }

  handleDrop = (index, element) => {
    let updateItems = this.state.items

    // Add the select answer in dropAnswer in array items
    updateItems[index].dropAnswer = element.answer

    this.setState({
      items: updateItems
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
