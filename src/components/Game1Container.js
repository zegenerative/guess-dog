import React, { Component } from 'react'
import Game1Visualiser from './Game1Visualiser'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'
import { getBreedAndUrl } from '../actions/getBreedAndUrl'
import { updateScore } from '../actions/updateScore'

class Game1Container extends Component {
    state = {
        display: false
    }

    componentDidMount() {
        this.props.getDogs()
    }

    nextQuestion = () => {
        console.log('start game', this.state)
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
        const answer = event.target.innerHTML
        if(answer === this.props.breed) { 
            alert('Correct!')
            this.props.updateScore(1, 1)
            setTimeout(this.nextQuestion, 2000)
        } else {
            alert('Wrong!')
            this.props.updateScore(1, 0)
            setTimeout(this.nextQuestion, 2000)
        }
    }
    
    render() {
        return (
        <Game1Visualiser 
            questionNo={this.props.total}
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
        score: state.score.score,
        total: state.score.total
    }
}

export default connect(mapStateToProps, { getDogs, getBreedAndUrl, updateScore })(Game1Container)