import React, { Component } from 'react';
import LandingPage from './components/LandingPage'

class Home extends Component {


    render() {
        return (
            <div className="home">
                <div className="landing-page">
                    Landing page

                    <LandingPage />
                </div>
            </div>
        )
    }
}

export default Home;