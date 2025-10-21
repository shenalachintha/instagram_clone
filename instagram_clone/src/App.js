import React, { Component } from "react";
import "./App.css";
import Home from "./Components/HomePage/Home";
import LoginPage from "./Components/LoginPage/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <Home />
        ) : (
          <LoginPage onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
