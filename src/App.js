import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Postit from './components/Postit';
import Table from './components/Table';
import data from './data/data.json';

class App extends Component {
  render() {
    const dataToSend = [
      {
        reviewer: data[1],
        reviewed: data[3]
      },
      {
        reviewer: data[3],
        reviewed: data[0]
      },
      {
        reviewer: data[0],
        reviewed: data[2]
      },
      {
        reviewer: data[2],
        reviewed: data[1]
      },
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Code Reviewer</h1>
        </header>
        <div>
          <Postit title="Pull Request de "/>
          <Postit title="Reviewer"/>
        </div>
        <Table data={dataToSend}/>
      </div>
    );
  }
}

export default App;
