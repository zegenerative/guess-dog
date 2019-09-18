import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import request from 'superagent'

class Main extends Component {
    setStoreWithDogs = (breeds) => {
        this.props.dispatch({
            type: 'INITIALISE_STORE',
            payload: {
                dogsList: breeds
            }
        })
    }

    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
            const breeds = Object.keys(response.body.message)
            this.setStoreWithDogs(breeds)
            })
            .catch(console.error)
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
              <Link to="/Game2"><button>Game 2</button></Link>
              <button>Game 3</button>
              <Link to='/Credits'><footer>credits</footer></Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      state
    }
  }

export default connect(mapStateToProps)(Main)
