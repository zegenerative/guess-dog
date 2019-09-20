import React, { Component } from 'react'
import { connect } from 'react-redux'
import Game2Container from './Game2Container'
import Game1Container from './Game1Container'
import {toggleGame} from '../actions/getThreeRandomDogs'

export class Game3Container extends Component{
    

    render(){
        return (<div>Hello there
    
        {this.state.toggle? <Game1Container /> : <Game2Container />}</div>)
    }

    
}

const mapStateToProps = (state) => {
    return {

       // toggle

    }
  }

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Game2Container)