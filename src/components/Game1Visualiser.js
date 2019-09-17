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
          <img src={this.props.imgUrl} alt='dog'></img>
      </div>
    )
  }
}
