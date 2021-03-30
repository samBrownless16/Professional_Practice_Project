import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navigationBar';


class App extends Component {
    state = {
        loggedIn: false
    };

    render() {
        return (
            // JSX (JavaScript XML) - Babel(A JavaScript compiler) converts JSX to JavaScript
            <div className="App">
                <NavigationBar
                    loggedIn={this.state.loggedIn}>
                </NavigationBar>
            </div>
        );
    }
}

export default App;