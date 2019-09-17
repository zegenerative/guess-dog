import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class MainPage extends Component {


  render() {

    const urlDogImage = "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg"
    return (
      <div>
          <h1>Main Page</h1>
          <Link to="/dogs"><img src ={urlDogImage} width = "200px"  alt = "dog"/></Link>
          <p>Click me to list dogs available</p>

          <div>

              <button>Game 1</button>
              <button>Game 2</button>
              <button>Game 3</button>
          </div>
          
      </div>
    )
  }
}