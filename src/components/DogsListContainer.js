import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'

class DogsListContainer extends Component {

  render() {
    console.log(this.props.dogs)
    return <DogsList dogBreeds={this.props.dogs.dogsList} />
  }
}

const mapStateToProps = (state) => {
    return {
      dogs: state
    }
  }

export default connect(mapStateToProps)(DogsListContainer)