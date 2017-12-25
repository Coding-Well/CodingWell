import React, { Component } from 'react';
import './App.css';
import { setInterval } from 'timers';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      opacity:0.0
    }
  }
  componentDidMount(e){
    let tmd=this.state.opacity;
    
    setInterval(function(){
      tmd+=0.05;
      if(tmd>1){
        tmd=0;
      }
      this.setState({opacity:tmd});
    }.bind(this),65);
  }
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
        <div className="container" style={{opacity:this.state.opacity}}>
          <h2>Coming Soon</h2>
          <p>享受开发的过程</p>
        </div>
      </div>
    );
  }
}

export default App;
