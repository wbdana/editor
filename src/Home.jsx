import React, { Component } from 'react';
import Example from './components/LandingPage'

class Home extends Component {


    render() {
        return (
            <div className="home">
                <div className="landing-page">
                    Landing page

                    <Example/>
                </div>
            </div>
        )
    }
}

export default Home;