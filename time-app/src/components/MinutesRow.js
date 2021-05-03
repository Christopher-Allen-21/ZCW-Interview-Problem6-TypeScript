import React from 'react'
import '../styling/MinutesRow.css';

export default function MinutesRow(props){
    const {
        minuteOptions, 
        selectedMinute,
        onChangeMinute
    } = props

    return (
        <div>
            <p>Minutes</p>
            <select value={selectedMinute} onChange={onChangeMinute}>
                {minuteOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

        </div>
    )
}