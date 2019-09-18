import React, { Component } from 'react'
import Game1Visualiser from './Game1Visualiser'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'
import { getBreedAndUrl } from '../actions/getBreedAndUrl'
import { thisExpression } from '@babel/types'

class Game1Container extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    startGame = () => {
        console.log('start game')
        return this.props.getBreedAndUrl()
    }
        
    createRandomAnswers = () => {
        if(this.props.dogsList !== null) {
            const dogsList = this.props.dogsList
            let dogAnswers = [this.props.breed]
            let randomAnswer = null
            let listOfWrongDogs = dogsList.filter(dog => dog !== this.props.breed)
        
            while(dogAnswers.length < 3){
                randomAnswer = listOfWrongDogs[Math.floor(Math.random()*listOfWrongDogs.length)]
                dogAnswers = dogAnswers.concat(randomAnswer)
                listOfWrongDogs = listOfWrongDogs.filter(dog => dog !== randomAnswer)
            }
            return dogAnswers.sort(() => Math.random() - 0.5)
        }
    }
    
    render() {
        // return <h1>test</h1>
    return <Game1Visualiser 
    // imgUrl={this.props.url} breed={this.props.breed} 
    dogAnswers = {this.createRandomAnswers()}
    startGame = {this.startGame}
    />
  }
}

const mapStateToProps = (state) => {
    console.log('game1state', state)
    return {
        dogsList: state.dogsList,
        breed: state.breedAndUrl.breed,
        url: state.breedAndUrl.imgUrl
    }
  }

export default connect(mapStateToProps, { getDogs, getBreedAndUrl })(Game1Container)