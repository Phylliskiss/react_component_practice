import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <WelcomeComponent name="Codetrain"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} is awesome, react works!!!!
        </h1>
      </div>
    )
  }
}

export default App;
