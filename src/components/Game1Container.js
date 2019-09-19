import React, { Component } from 'react'
import Game1Visualiser from './Game1Visualiser'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'
import { getBreedAndUrl } from '../actions/getBreedAndUrl'
import { updateQuestionNo, updateScore } from '../actions/getThreeRandomDogs'

class Game1Container extends Component {
    state = {
        display: false
    }

    componentDidMount() {
        this.props.getDogs()
    }

    nextQuestion = () => {
        this.props.updateQuestionNo() 
            this.setState({
            display: true
            })
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

    checkAnswer = (event) => {
        event.preventDefault()
        const answer = event.target.innerHTML
        if(answer === this.props.breed) { 
            alert('Correct!')
            this.props.updateScore()
            setTimeout(this.nextQuestion, 2000)
        }
    }
    
    render() {
        return (
        <Game1Visualiser 
            questionNumber={this.props.questionNumber}
            score={this.props.score}
            url={this.props.url} breed={this.props.breed} 
            dogAnswers = {this.createRandomAnswers()}
            nextQuestion = {this.nextQuestion}
            checkAnswer = {this.checkAnswer}
            display = {this.state.display}
        />)
    }
}

const mapStateToProps = (state) => {
    console.log('game1state', state)
    return {
        dogsList: state.dogsList,
        breed: state.breedAndUrl.breed,
        url: state.breedAndUrl.url,
        questionNumber: state.game.questionNumber,
        score: state.game.score
    }
}

export default connect(mapStateToProps, { getDogs, getBreedAndUrl, updateQuestionNo, updateScore })(Game1Container)