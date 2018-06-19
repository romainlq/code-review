import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Postit from './components/Postit';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Code Reviewer</h1>
        </header>
        <div>
          <Postit title="Reviewer"/>
          <Postit title="Reviewed"/>
        </div>
        <Table/>
      </div>
    );
  }
}

export default App;
