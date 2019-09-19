import React, { Component } from 'react'

//import {Link} from 'react-router-dom'

export default class Game1Visualiser extends Component {
  render() {
    console.log('VISUALISER DISPLAY', this.props.display)
    return (
      <div>
        { !this.props.display ? <h1>GAME 1</h1> : <h1>GOOD LUCK!</h1> }
        <div>
        <h2>Score: {this.props.score}</h2>
        <h2>Question No.: {this.props.questionNo}</h2>
          { !this.props.display && <button onClick={this.props.nextQuestion}><h2>START GAME</h2></button> }
          { this.props.display && 
          <div>
            <p>What kind of breed is this?</p>
            <img src={this.props.url} alt='dog'></img>
            <br />
            {!this.props.dogAnswers && 'loading...'}
            {this.props.dogAnswers && this.props.dogAnswers.map(dog =>
            <button key={dog} onClick={this.props.checkAnswer}>{dog}</button>)}
          </div>
          }
        </div>
      </div>
    )
  }
}