import React from 'react';
import './App.css';
import HoursRow from './components/HoursRow';
import MinutesRow from './components/MinutesRow';
import AmPmRow from './components/AmPmRow';


class App extends React.Component{

  render(){
    return (
      <div className="App">
        <p className="App-intro">
          Hi ZipCoder!
        </p>
        <ol>
          <li><HoursRow id="hours"/></li>
          <li><MinutesRow id="minutes"/></li>
          <li><AmPmRow /></li>
        </ol>
        
        
      </div>
    );
  }
}

export default App;
