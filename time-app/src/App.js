import React, {useEffect, useState} from 'react';
import './App.css';
import HoursRow from './components/HoursRow';
import MinutesRow from './components/MinutesRow';
import AmPmRow from './components/AmPmRow';
import MilitaryTimeRow from './components/MilitaryTimeRow';


function App() {
  const [hourOptions, setHourOptions] = useState(["01","02","03","04","05","06","07","08","09","10","11","12"]);
  const [minuteOptions, setMinuteOptions] = useState(["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"]);
  const [amPmOptions, setAmPmOptions] = useState(["AM","PM"]);

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [amPm, setAmPm] = useState();

  function handleButtonClick() {
    setHour(HoursRow.value);
    setMinute(MinutesRow.value);
    setAmPm(AmPmRow.value);
  }

  return (
    <div className="App">
      <br />
      <h1 className="App-intro">ZipCode Military Time Converter</h1>

      <ol>
        <li><HoursRow id="hours" hourOptions={hourOptions} onChangeHour={e => setHour(e.target.value)}/></li>
        <li><MinutesRow id="minutes" minuteOptions={minuteOptions} onChangeMinute={e => setMinute(e.target.value)}/></li>
        <li><AmPmRow id="am-pm" amPmOptions={amPmOptions} onChangeAmPm={e => setAmPm(e.target.value)}/></li>
      </ol>

      <button onClick="handleButtonClick">Convert the Time!</button>

      <p>Hour: {hour} Minute: {minute} AM/PM: {amPm}</p> 
      <MilitaryTimeRow selectedHour={hour} selectedMinute={minute} selectedAmPm={amPm}/>
        
    </div>
    );
  }

export default App;
