import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Answer from './components/Answer/Answer'
import Box from './components/Box/Box'
import './App.css'

class App extends Component {
  state = {
    answers: [
      { answer: 'Hard Disk', isCorrect: 'correct' },
      { answer: 'Monitor',   isCorrect: 'incorrect' },
      { answer: 'Mouse',     isCorrect: 'incorrect' },
      { answer: 'Keyboard',  isCorrect: 'incorrect' }
    ],

    isCorrect: null
  }

  handleDrop = item => {
    const currentState = this.state.answers
    const newState = currentState.filter( answer => {
      return answer.answer !== item.answer
    })

    const isAnswerCorrect = item.isCorrect

    this.setState({
      answers: newState,
      isCorrect: isAnswerCorrect
    })
  }

  render() {
    const answers = this.state.answers.map( (answer, index) => {
      return (
        <Answer 
          answer={answer}
          id={index}
          key={index}
          handleDrop={answer => this.handleDrop(answer)}
        />
      )
    })

    return (
      <div className="App">
        <h1 className="title">
          Which of the following is a storage device?
        </h1>
        <section>
          <article className="App_answer">
            {answers}
          </article>
          <article className="App_box">
            <Box isCorrect={this.state.isCorrect} />
          </article>
        </section>
      </div>
    )
  }
} 

export default DragDropContext(HTML5Backend)(App)
