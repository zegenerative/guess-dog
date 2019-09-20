import React, { Component } from 'react'
import Game2Visualiser from './Game2Visualiser'
import { connect } from 'react-redux'
import { endGame } from '../actions/endGame' 
import { getThreeRandomDogs, getCorrectDogName, updateQuestionNo,updateScore, updateCorrectDogURL } from '../actions/getThreeRandomDogs'

class Game2Container extends Component {

    state = {
        showCorrectAnswer: false, 
    }
    componentDidMount() {
        //get three random dog image URLs
        this.props.getThreeRandomDogs()
    }

    getDogName = (imgURLs) => {
        if (this.props.threeDogs !== null) {
            console.log('props of game2', this.props.threeDogs)
            // display one name under three dog images
            console.log("getDogName imgUrls", imgURLs)
            const chosenDog = imgURLs[Math.floor(Math.random() * imgURLs.length)]
            this.props.updateCorrectDogURL(chosenDog) //send correct dog URL to redux store
            const firstIndex = chosenDog.indexOf("eeds")
            const secondIndex = chosenDog.indexOf("/", firstIndex + 5)
            const dogNameDisplay = chosenDog.slice(firstIndex + 5, secondIndex)
            console.log('dogNameDisplay', dogNameDisplay)
            this.props.getCorrectDogName(dogNameDisplay)
            return dogNameDisplay
        }
    }

    dogClick = (event, dogName) => {
        event.preventDefault()
        const dogGuessed = event.target.src
        let selectedAnsweris = dogGuessed.includes(this.props.correctDogName)
        this.setState({ questionNumber: this.questionNumber + 1 })
        this.props.updateQuestionNo()
        if (selectedAnsweris === true) {
            alert("You guessed correctly")
            console.log("you guessed", dogGuessed, this.props.correctDogName)
            this.props.updateScore()
        } else {
            alert("wrong answer");
            this.setState({
                showCorrectAnswer: true
            })

            setTimeout(() => {
                this.props.getThreeRandomDogs()
                this.setState({ showCorrectAnswer: false });
            }, 3000)
            return
        }
        this.props.getThreeRandomDogs() //get three new random image URLs
    }
    showCorrect = () => {
        console.log('hello')
        const answer = this.props.threeDogs.filter(url => url.includes(this.props.correctDogName))
        if (answer.length > 0) {
            return <div class="card-panel teal lighten-2">
                    <p>The correct answer was </p>
                <img src={answer[0]} alt="" width="40%" />
                </div>
        }
      
    }

          
    render() {

        return <Game2Visualiser
            imgUrls={this.props.threeDogs}
            correctDogName={this.props.correctDogName}
            dogClick={this.dogClick}
            startGame={this.startGame}
            questionNumber={this.props.questionNumber}
            score={this.props.score}
            showCorrectAnswer={this.state.showCorrectAnswer}
            showCorrect={this.showCorrect}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        dogsList: state.dogsList,
        threeDogs: state.game.threeDogs, //three image URLs
        correctDogName: state.game.correctDogName,  //dog name displayed under images
        questionNumber: state.game.questionNumber,
        score: Math.floor((state.game.score / state.game.questionNumber) * 100)+'%',
        dogURL: state.game.dogURL
    }
  }

const mapDispatchToProps = {
    getThreeRandomDogs,
    getCorrectDogName,
    updateQuestionNo,
    updateScore,
    updateCorrectDogURL
}

export default connect(mapStateToProps, mapDispatchToProps)(Game2Container)