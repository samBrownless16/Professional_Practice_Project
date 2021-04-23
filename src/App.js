import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/navigationBar';
class App extends Component {   
    state = {
        user: ''
    }

    handleLogin = (uname) => {
        sessionStorage.setItem("LoggedIn", uname);
        this.setState({ user: sessionStorage.getItem("LoggedIn") });
    }

    handleLogout = () => {
        sessionStorage.removeItem("LoggedIn");
    }

    componentDidMount() {
        this.setState({ user: sessionStorage.getItem("LoggedIn") });
    }

    render() {
        return (
            // JSX (JavaScript XML) - Babel(A JavaScript compiler) converts JSX to JavaScript
            <div className="App">
                <NavigationBar
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    username={this.state.user}>
                </NavigationBar>
               
            </div>
          
           
        );
    }
}

export default App;