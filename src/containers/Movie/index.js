import React, { Component } from 'react'
import { connect } from 'react-redux'

class Movie extends Component {
    componentDidMount() {
        console.log(this.props.match);
    }
    render() {
        return (
            <div>movie</div>
        )
    } 
}

export default Movie
