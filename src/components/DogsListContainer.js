import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'

class DogsListContainer extends Component {

  render() {
    console.log(this.props.dogsList)
    return <DogsList dogBreeds={this.props.dogsList} />
  }
}

const mapStateToProps = (state) => {
    return {
      dogsList: state
    }
  }

export default connect(mapStateToProps)(DogsListContainer)