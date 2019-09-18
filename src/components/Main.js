import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDogs } from '../actions/getDogs'

class Main extends Component {

  componentDidMount() {
    this.props.getDogs()
  }

  render() {
    const urlDogImage = "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg"
    return (
      <div>
          <h1>Main Page</h1>
          <Link to="/dogs"><img src ={urlDogImage} width = "200px"  alt = "dog"/></Link>
          <p>Click me to list dogs available</p>
          <div>
              <Link to="/Game1"><button>Game 1</button></Link>
              <button>Game 2</button>
              <button>Game 3</button>
              <Link to='/Credits'><footer>credits</footer></Link>
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
