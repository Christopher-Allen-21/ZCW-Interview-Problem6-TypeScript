import React from 'react';
import './App.css';
import HoursRow from './components/HoursRow';
import MinutesRow from './components/MinutesRow'


class App extends React.Component{

  render(){
    return (
      <div className="App">
        <p className="App-intro">
          Hi ZipCoder!
        </p>
        <HoursRow />
        <MinutesRow />
      </div>
    );
  }
}

export default App;
