import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const buttonStyle1 = "waves-effect waves-light btn-large"
const buttonStyle2 = "waves-effect waves-dark btn-small"
const buttonStyle3 = "btn-floating btn-large waves-effect waves-light red"

export default class Game2Visualiser extends Component {
  render() {
    return (
      this.props.showCorrectAnswer ? this.props.showCorrect() : <div class="card-panel teal lighten-2">
        <Link to='/'><button class={ buttonStyle1 }><h6>back to main</h6></button></Link>
        <h3>GAME 2</h3>
        <h6>Question Number: {this.props.questionNumber}</h6>
        <h5>Score: {this.props.score}</h5>
        <div>
        Which one is the
        <strong> {this.props.imgUrls && this.props.correctDogName}</strong>
        <br />
          {this.props.imgUrls &&
            this.props.imgUrls.map(dogImage => <img value={dogImage} onClick={(event, dogImage) => this.props.dogClick(event, dogImage)} width="20%" src={dogImage} alt="dog"></img>
            )}</div>
      </div>
    )
  }
}

