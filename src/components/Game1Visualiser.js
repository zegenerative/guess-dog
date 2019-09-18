import React, { Component } from 'react'

//import {Link} from 'react-router-dom'

export default class Game1Visualiser extends Component {
  /*renderDogBreed(breed) {
    return <li key={breed}>
          <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
    </li>
  }*/
  
  render() {
    console.log("this.props.dogAnswers is", this.props.dogAnswers)
    return (
      
      <div>
        <h1> do not refresh!!!</h1>
        <p>look! this is a {this.props.breed}</p>
          <img src={this.props.imgUrl} alt='dog'></img>
          <br />
          {this.props.dogAnswers.map(dog =><button> {dog}</button>)}
      </div>
    )
  }
}
