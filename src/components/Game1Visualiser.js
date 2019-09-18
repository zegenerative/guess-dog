import React, { Component } from 'react'

//import {Link} from 'react-router-dom'

export default class Game1Visualiser extends Component {
  /*renderDogBreed(breed) {
    return <li key={breed}>
          <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
    </li>
  }*/
  
  render() {
    return (
      <div>
        <h1>GAME 1</h1>
        <button onClick={this.props.startGame}><h2>START GAME</h2></button>
        <p>look! this is a {this.props.breed}</p>
          <img src={this.props.url} alt='dog'></img>
          <br />
          {!this.props.dogAnswers && 'loading...'}
          {this.props.dogAnswers && this.props.dogAnswers.map(dog =>
          <button key={dog}>{dog}</button>)}
      </div>
    )
  }
}
