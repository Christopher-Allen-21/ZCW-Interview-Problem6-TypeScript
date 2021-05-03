import React from 'react'
import '../styling/HoursRow.css';

export default function HoursRow(props){
    const {
        hourOptions, 
        selectedHour,
        onChangeHour
    } = props

    return (
        <div>
            <p>Hours</p>
            <select value={selectedHour} onChange={onChangeHour}>
                {hourOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

        </div>
    )
}