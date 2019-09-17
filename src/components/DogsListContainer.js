import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends Component {
  state = { dogBreeds: null }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}