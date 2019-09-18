import React, { Component } from 'react'


export default class Game2Visualiser extends Component {
  
  render() {
    console.log("this.props in Game2Visualiser is", this.props)
    return (
      
      <div>
        <h1>Game 2!!!!!!</h1>
        <div>
        {this.props.imgUrls&&
            this.props.imgUrls.map(dogImage =><img value = {dogImage} onClick = {(event, dogImage) => this.props.dogClick(event, dogImage)}width = "200px" src= {dogImage} alt = "dog"></img>
        )}</div>Which one is the 
        <strong> {this.props.imgUrls&&this.props.correctDogName}</strong>
    
      </div>
    )
  }
}
