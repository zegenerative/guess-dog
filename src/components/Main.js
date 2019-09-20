import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDogs } from '../actions/getDogs'

const buttonStyle1 = "waves-effect waves-light btn-large"
const buttonStyle2 = "waves-effect waves-dark btn-small"
const buttonStyle3 = "btn-floating btn-large waves-effect waves-light red"

class Main extends Component {

  componentDidMount() {
    this.props.getDogs()
  }

  render() {
    const urlDogImage = "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg"
    return (
      <div class="card-panel teal lighten-2">
          <h1>THE INCREDIBLE DOG QUIZ</h1>
          <Link to="/dogs"><img src ={urlDogImage} width = "50%"  alt = "dog"/></Link>
          <p>Click the image to learn about the range of dog breeds</p>
          <div>
              <Link to="/Game1"><button class={buttonStyle2}>Game 1</button></Link>
              <Link to="/Game2"><button class={buttonStyle2}>Game 2</button></Link>
              <button class={buttonStyle2}>Game 3</button>
              <br />
              <Link to='/Credits'><footer class={buttonStyle3}>credits</footer></Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mainpagestate', state)
    return {
      dogsList: state
    }
  }

export default connect(mapStateToProps, { getDogs })(Main)
