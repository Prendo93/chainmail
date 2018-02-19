import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/FlatButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button borderRadius='10px'>
          Sign In
        </Button>
      </div>
    );
  }
}

export default App;
