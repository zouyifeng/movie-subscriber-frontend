import React, { Component } from 'react'
import clientRequest from '../../client/request'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            rate: '',
            type: '',
            publish_time: '',
            intro: '',
            country: '',
            actor: ''
        };
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        clientRequest.get(`/get-movie/${id}`).then(data => {
            console.log(data.data[0]);
            const movie = data.data[0]
            const { title, rate, type, publish_time, intro, country, actor } = movie;
            // document.getElementById("#test").innerText = JSON.toString(data)
            this.setState({ title, rate, type, publish_time, intro, country, actor });
        })
    }
    render() {
        return (
            <div id="test">
                <p>{this.state.title}</p>
                <p>{this.state.type}</p>
                <p>{this.state.actor}</p>
                <p>{this.state.country}</p>
                <p>{this.state.publish_time}</p>
                <p>{this.state.intro}</p>
            </div>
        )
    }
}

export default Movie
