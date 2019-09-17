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

    createRandomAnswers = () => {

        let dogAnswers = [this.props.breed]
        let randomAnswer = null
        let listOfWrongDogs = this.props.dogsList.filter(dog => dog !== this.props.breed)
        /*const listOfAllDogs = this.props.dogsList
        console.log("listOfAllDogs is", listOfAllDogs)
        const listOfAllDogsLessCorrect = listOfAllDogs.filter(Dog => Dog !== this.props.breed)
        console.log("listOfAllDoglessCorrect is", listOfAllDogsLessCorrect, "list of correct answer is:", this.props.breed)
        const randomDogAnswer = listOfAllDogsLessCorrect[Math.floor(Math.random()*listOfAllDogsLessCorrect.length)]
        
        const listOfAllDogsLessCorrectPlusOne = listOfAllDogsLessCorrect.filter(Dog => Dog !== randomDogAnswer)
        console.log("listOfAllDogsLessCorrectPlusone is", listOfAllDogsLessCorrectPlusOne)
        const randomDogAnswer2 = listOfAllDogsLessCorrectPlusOne[Math.floor(Math.random()*listOfAllDogsLessCorrectPlusOne.length)]
        console.log("randomDogAnswer2 is ", randomDogAnswer2)
        dogAnswers = dogAnswers.concat(randomDogAnswer, randomDogAnswer2, this.props.breed)*/
        
        //for(let i=0; i< 2;i++){
        while(dogAnswers.length < 3){

            randomAnswer = listOfWrongDogs[Math.floor(Math.random()*listOfWrongDogs.length)]
            dogAnswers = dogAnswers.concat(randomAnswer)
            listOfWrongDogs = listOfWrongDogs.filter(dog => dog !== randomAnswer)

        }
        //}
        console.log("dogAnswers length is", dogAnswers.length)

        return dogAnswers

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

export default connect(mapStateToProps)(Game1Container)