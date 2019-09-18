import React, { Component } from 'react'
import Game1Visualiser from './Game1Visualiser'
import request from 'superagent'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'

class Game1Container extends Component {

    componentDidMount() {
        this.props.getDogs()
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

    createRandomAnswers = () => {

        let dogAnswers = [this.props.breed]
        let randomAnswer = null
        let listOfWrongDogs = this.props.dogsList.filter(dog => dog !== this.props.breed)
    
        while(dogAnswers.length < 3){

            randomAnswer = listOfWrongDogs[Math.floor(Math.random()*listOfWrongDogs.length)]
            dogAnswers = dogAnswers.concat(randomAnswer)
            listOfWrongDogs = listOfWrongDogs.filter(dog => dog !== randomAnswer)

        }
    
        console.log("dogAnswers length is", dogAnswers.length)

        return dogAnswers.sort(() => Math.random() - 0.5)

    }
    
    render() {
      console.log("this.props is", this.props.dogsList)
      //console.log("random dogs is:", this.createRandomAnswers() )
    return <Game1Visualiser imgUrl={this.props.url} breed={this.props.breed} dogAnswers = {this.createRandomAnswers()}/>
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

export default connect(mapStateToProps, { getDogs })(Game1Container)