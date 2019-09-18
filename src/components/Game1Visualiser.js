import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class Game1Visualiser extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>
          <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
    </li>
  }

  render() {
    return (
      <div>
        <h1> do not refresh!!!</h1>
        <p>look! this is a {this.props.breed}</p>
          <img src={this.props.imgUrl} alt='dog'></img>
          <button>The answer is {this.props.breed}</button>
          <button> Answer1</button>
           <button> Answer2</button>
          
      </div>
    )
  }
}

