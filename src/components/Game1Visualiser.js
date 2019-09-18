import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class Game1Visualiser extends Component {
 
  renderDogBreed(breed) {
    return <li key={breed}>
          <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
    </li>
  }

  
  render() {
    const answers= [this.props.option1,
      this.props.breed,
      this.props.option2
    ]
   
   const shuffled = answers.sort(() => Math.random() - 0.5);
   


    return (
      <div>
        <div className="container">
        <h1> do not refresh!!!</h1>
        <div className="row">
          <div className="col-md-9">
          <img src={this.props.imgUrl} alt='dog' height="350" width="400" style={{borderRadius: '20px'}}></img>
            
         <br/> <br/>
        <p>Choose the correct breed of dog from the following options</p>
        <h5 style={{color:'red'}}>{this.props.wrong}</h5>
        <h5 style={{color:'green'}}> {this.props.right}</h5>
         <button className="btn btn-primary" onClick={() => this.props.select(shuffled[0])}
         style={{marginLeft: '20px'}}>
           {shuffled[0]}
         </button >
         <button className="btn btn-primary" onClick={() => this.props.select(shuffled[1])}
          style={{marginLeft: '20px'}}>
           {shuffled[1]}
         </button >
         <button className="btn btn-primary" onClick={() => this.props.select(shuffled[2])}
          style={{marginLeft: '20px'}}>
           {shuffled[2]}
         </button >
          </div>
          <div className="col-md-3">
          <h5 >Success Rate : {(this.props.score/this.props.total) * 100} %</h5>
          <h5 >Correct: {this.props.score} </h5>
            <h5 >Wrong : {this.props.wrongAnswers}</h5><br/>
         </div></div>
        </div></div>)}
}

