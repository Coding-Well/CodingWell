import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const filterStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#fff',
      opacity: 0.2
    }

    return (
      <div className="App">
        <div className="filter" style={filterStyle}></div>
        <div className="container">
          <h2>Coming Soon</h2>
          <p>享受开发的过程</p>
        </div>
      </div>
    );
  }
}

export default App;
