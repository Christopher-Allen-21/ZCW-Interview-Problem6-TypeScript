import './App.css';
import Clock from './components/Clock.js';
import TimeSelector from './components/TimeSelector.js';

import { Component } from 'react';

let time = new Date().toLocaleString();

class App extends Component{
  render(){
    return (
      <div className="App">
        <p className="App-intro">
          Hi {this.props.name}!
        </p>
        <Clock />
        <TimeSelector />
      </div>
    );
  }
}

export default App;
