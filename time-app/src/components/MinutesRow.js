import React from 'react'
import '../styling/MinutesRow.css';

export default function MinutesRow(props){
    const {
        minuteOptions, 
        selectedMinute
    } = props

    return (
        <div>
            <p>Minutes</p>
            <select>
                {minuteOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

        </div>
    )
}