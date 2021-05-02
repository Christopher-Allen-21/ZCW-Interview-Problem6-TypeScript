import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

import '../styling/TimeSelector.css';

function TimeSelector() {
    const [value, onChange] = useState('10:00');
    const hideClock = true;
  
    return (
      <div>
        <TimePicker
          onChange={onChange}
          value={value}
          disableClock={hideClock}
        />
        <p>
          The time is {value} in military time
        </p>
      </div>
    );
  }

export default TimeSelector;