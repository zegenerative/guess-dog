import React, { Component } from 'react'
import DogsList from './DogsList'
import request from 'superagent'
import { connect } from 'react-redux'

class DogsListContainer extends Component {

    setStoreWithDogs = (breeds) => {
        this.props.dispatch({
            type: 'INITIALISE_STORE',
            payload: {
                dogsList: breeds
            }
        })
    }

    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
            const breeds = Object.keys(response.body.message)
            this.setStoreWithDogs(breeds)
            })
            .catch(console.error)
        }

  render() {
    return <DogsList dogBreeds={this.props.dogs.dogsList} />
  }
}

const mapStateToProps = (state) => {
    return {
      dogs: state
    }
  }

export default connect(mapStateToProps)(DogsListContainer)