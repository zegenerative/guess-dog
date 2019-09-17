import React, { Component } from 'react'
import Game1Visualiser from './Game1Visualiser'
import request from 'superagent'
import { connect } from 'react-redux'

class Game1Container extends Component {

    componentDidMount() {
        console.log(this.props)
        const random = Math.floor((Math.random() * this.props.dogsList.length) - 1)
        const randomBreed = this.props.dogsList[random]
        request
            .get('https://dog.ceo/api/breed/' + randomBreed + '/images/random')
            .then(response => {
            const imgUrl = response.body.message
            this.moveIntoTheStore(imgUrl, randomBreed)
            })
            .catch(console.error)
        }
    
    moveIntoTheStore = (url, breed) => {
        console.log('I AM DISPATCHING URL AND RANDOMBREED')
        this.props.dispatch({
            type: 'ADD_URL_RANDOMBREED',
            payload: {
                url, breed
            }
        })
    }

    render() {
      console.log(this.props)
    return <Game1Visualiser imgUrl={this.props.url} breed={this.props.breed}/>
  }
}

const mapStateToProps = (state) => {
    console.log('STATE GAME1', state)
    return {
        dogsList: state.mainpage,
        url: state.game1.url,
        breed: state.game1.breed
    }
  }

export default connect(mapStateToProps)(Game1Container)