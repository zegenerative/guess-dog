import React, { Component } from 'react'


export default class Game2Visualiser extends Component {
  render() {
    return (
      <div>
        <h1>Game 2!!!!!!</h1>
        <h2>Question Number: {this.props.questionNumber}</h2>
        <h2>Score: {this.props.score}</h2>
        <button onClick={this.props.startGame}>Start Game 2</button>
        { <div>
        {this.props.imgUrls&&
            this.props.imgUrls.map(dogImage =><img value = {dogImage} onClick = {(event, dogImage) => this.props.dogClick(event, dogImage)} width = "200px" src= {dogImage} alt = "dog"></img>
        )}</div>}
        Which one is the 
        <strong> {this.props.imgUrls&&this.props.correctDogName}</strong>
      </div>
    )
  }
}
