import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends React.Component {

    render() {
        return(
        <div>
            <h1>GUESS DOG</h1>
            <h2>TRAIN YOUR KNOWLEDGE</h2>
            <button><Link to='/'>go to the dogs list</Link></button>
            <h2>TEST YOUR KNOWLEDGE</h2>
            <button><Link to='./components/Game_1'>Test yoself with game 1</Link></button>
            <button><Link to='./components/Game_2'>Test yoself with game 2</Link></button>
            <button><Link to='./components/Game_3'>Test yoself with game 3</Link></button>
        </div>
        )
    }
}

export default Main