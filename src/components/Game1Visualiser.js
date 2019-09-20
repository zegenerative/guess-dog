import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const buttonStyle1 = "waves-effect waves-light btn-large"
const buttonStyle2 = "waves-effect waves-dark btn-small"
const buttonStyle3 = "btn-floating btn-large waves-effect waves-light red"

export default class Game1Visualiser extends Component {
  render() {
    return (
      <div class="card-panel teal lighten-2">
        <Link to='/'><button class={ buttonStyle1 }><h6>back to main</h6></button></Link>
        { !this.props.display ? <h3>GAME 1</h3> : <h3>GOOD LUCK!</h3> }
        <div>
          { this.props.display && <h6>Score: {this.props.score}</h6> }
          { !this.props.display && <button class={buttonStyle3} onClick={this.props.nextQuestion}>START</button> }
          { this.props.display && <h6>Question {this.props.questionNumber}</h6> }
          { this.props.display && 
          <div class="card-panel teal lighten-2">
            { this.props.answer === 'start' ? <p>What kind of breed is this?</p> : <p></p> }
            { this.props.answer === 'correct' ? <h3>You are correct! it is a {this.props.breed}! </h3> : <p></p> } 
            { this.props.answer === 'incorrect' ? <h3>Oops, wrong answer... it is a {this.props.breed}! </h3> : <p></p> }   
            {this.props.dogAnswers && this.props.dogAnswers.map(dog =>
            <button class={ buttonStyle2 } key={dog} onClick={this.props.checkAnswer}>{dog}</button>)}
            <br />
            <img src={this.props.url} alt='dog' width='30%'></img>
            <br />
            {!this.props.dogAnswers && 'loading...'}
          </div>
          }
        </div>
      </div>
    )
  }
}