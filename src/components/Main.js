import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends React.Component {

    render() {
        return(
        <div>
            <h1>GUESS DOG</h1>
            <h2>TRAIN KNOWLEDGE OF DOG</h2>
            <Link to='./DogsListContainer'><button>go to the dogs list</button></Link>
            <h2>TEST KNOWLEDGE OF DOG</h2>
            <button><Link to='./Game_1'>Test yoself with game 1</Link></button>
            <button><Link to='./Game_2'>Test yoself with game 2</Link></button>
            <button><Link to='./Game_3'>Test yoself with game 3</Link></button>
        </div>
        )
    }
}

export default Main