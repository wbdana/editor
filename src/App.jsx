import React, { Component } from 'react';
import LandingPage from './components/LandingPage'

class App extends Component {


    render() {
        return (
            <div className="app">
                <div className="landing-page">
                    <LandingPage />
                </div>
            </div>
        )
    }
}

export default App;