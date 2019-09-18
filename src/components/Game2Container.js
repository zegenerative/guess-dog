import React, { Component } from 'react'
import Game2Visualiser from './Game2Visualiser'
import request from 'superagent'
import { connect } from 'react-redux'

class Game2Container extends Component {


   state = {
        imgURLs: null, //contains 3 image URLs
        correctDogName: null,
        score: 0,
        questionNumber: 0
    }

    
    componentDidMount() {


        //fetch 3 random images
        request
        .get('https://dog.ceo/api/breeds/image/random/3')
        .then(response =>{
            const imgURLs = response.body.message
            console.log("respons.body G2C is", response.body)
            //console.log("imgURLs is in Game2Container.js:", imgURLs)
            this.updateImgURLsInLocalState(imgURLs)

        })
        .catch(console.error)
        }

    updateImgURLsInLocalState(imgURLs){
        
        //local state contains three random image URLs
        this.setState({imgURLs: imgURLs})
        
        this.setState({correctDogName: this.getDogName(imgURLs)})

        console.log("this.state.correctDogName is", this.state.correctDogName)

    }

    
    moveIntoTheStore = (url, breed) => {
        //console.log('I AM DISPATCHING URL AND RANDOMBREED')
        this.props.dispatch({
            type: 'ADD_URL_RANDOMBREED',
            payload: {
                url, breed
            }
        })
    }

    getDogName = (imgUrls)=>{

        //display one name under three dog images
        console.log("getDogName imgUrls", imgUrls)
        const chosenDog = imgUrls[Math.floor(Math.random()*imgUrls.length)]
        const firstIndex = chosenDog.indexOf("eeds")
        const secondIndex = chosenDog.indexOf("/", firstIndex+5)
        const dogNameDisplay = chosenDog.slice(firstIndex+5, secondIndex)

        return dogNameDisplay
    }

    dogClick = (event, dogName)=>{

        event.preventDefault()
        const dogGuessed = event.target.src
        console.log("you clicked", dogGuessed)
        let selectedAnsweris = dogGuessed.includes(this.state.correctDogName)
        console.log("you selected the correct dog?", selectedAnsweris)
        if(selectedAnsweris == true){

            this.setState({score: this.score+1})
            this.setState({questionNumber: this.questionNumber+1})
            alert("Your score is ", this.state.score)
        }
        alert(selectedAnsweris)
        //console.log("the correct answer is ", this.state.corretDogName)
    }

    

    render() {
      console.log("this.props.imgUrls in Game2Container is", this.props.imgUrls)

    return <Game2Visualiser imgUrls={this.state.imgURLs} getDogName = {this.getDogName} correctDogName = {this.state.correctDogName} dogClick = {this.dogClick} />
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

export default connect(mapStateToProps)(Game2Container)