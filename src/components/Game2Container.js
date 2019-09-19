import React, { Component } from 'react'
import Game2Visualiser from './Game2Visualiser'
import request from 'superagent'
import { connect } from 'react-redux'
import {getThreeRandomDogs, getCorrectDogName, updateQuestionNo} from '../actions/getThreeRandomDogs'

//const redux = require('redux')

class Game2Container extends Component {
//added export default home 18/9/2019
    state = {
//         imgURLs: null, //contains 3 image URLs
//         correctDogName: null,
//         score: 0,
         questionNumber: 1

     }

    componentDidMount() {
        //get three random dog image URLs
        this.props.getThreeRandomDogs()
    }

    startGame = () => {
        console.log('click')
        //return this.getDogName(this.props.threeDogs)
    }

    getDogName = (imgURLs) => {
        if(this.props.threeDogs !== null){
            console.log('props of game2', this.props.threeDogs)
        // display one name under three dog images
            console.log("getDogName imgUrls", imgURLs)
            const chosenDog = imgURLs[Math.floor(Math.random()*imgURLs.length)]
            const firstIndex = chosenDog.indexOf("eeds")
            const secondIndex = chosenDog.indexOf("/", firstIndex+5)
            const dogNameDisplay = chosenDog.slice(firstIndex+5, secondIndex)
            console.log('dogNameDisplay', dogNameDisplay)

            this.props.getCorrectDogName(dogNameDisplay)


            return dogNameDisplay
        }
    }

     dogClick = (event, dogName)=>{
         event.preventDefault()
         const dogGuessed = event.target.src
        
         let selectedAnsweris = dogGuessed.includes(this.props.correctDogName)
         this.setState({questionNumber: this.questionNumber+1})
        this.props.updateQuestionNo()
         
         if(selectedAnsweris === true){
            alert("You guessed correctly")
            console.log("you gueesed", dogGuessed, this.props.correctDogName)
            
         }else{

            alert("Wrong dog")

         }

         this.props.getThreeRandomDogs() //get three new random image URLs

     }

    render() {
        console.log('Game2Container this.props test:', this.props)
        return <Game2Visualiser 
        imgUrls={this.props.threeDogs} 
        correctDogName = {this.props.correctDogName}
        // correctDogName = {this.state.correctDogName} 
        dogClick = {this.dogClick}
        startGame = {this.startGame}
        questionNumber = {this.props.questionNumber} />
    }   
}


const mapStateToProps = (state) => {
    //console.log('STATE GAME1', state)
    return {
        dogsList: state.dogsList,
        threeDogs: state.game.threeDogs, //three image URLs
        correctDogName: state.game.correctDogName,  //dog name displayed under images
        questionNumber: state.game.questionNumber
    }
  }

const mapDispatchToProps = {
    getThreeRandomDogs,
    getCorrectDogName,
    updateQuestionNo
}

export default connect(mapStateToProps, mapDispatchToProps)(Game2Container)