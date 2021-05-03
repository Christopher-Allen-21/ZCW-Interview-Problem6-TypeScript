import React from 'react'
import '../styling/MilitaryTimeRow.css';

export default function MilitaryTimeRow(props){
    const {
        selectedHour,
        selectedMinute,
        selectedAmPm
    } = props

    return (
        <div>
            <p>The current Military Time is {selectedHour} Hundred {selectedMinute} Hours {selectedAmPm}</p>
            <br />
        </div>
    )
}