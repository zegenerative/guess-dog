import React, { Component } from 'react'
import { connect } from 'react-redux';

class Credits extends React.Component {

    render() {
        return(
            <div>
                <h1>Credits</h1>
                <h2>This page was made by the incredible dog-lovers: Allan, Tu and Zeger</h2>
                <iframe width="320" height="240" src="https://www.youtube.com/embed/J6nhSDAKRj8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='credits'></iframe>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
      credits: state
    }
  }

export default connect(mapStateToProps)(Credits)