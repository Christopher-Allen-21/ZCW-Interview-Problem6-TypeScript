import './App.css';
import { Component } from 'react';

let time = new Date().toLocaleString();

class App extends Component{
  render(){
    return (
      <div className="App">
        <p className="App-intro">
          Hi {this.props.name}!
        </p>
        <p className="App-clock">
          The time is {time}.
        </p> 
      </div>
    );
  }
}

export default App;
