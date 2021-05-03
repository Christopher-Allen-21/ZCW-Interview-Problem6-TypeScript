import React from 'react'
import '../styling/HoursRow.css';

export default function HoursRow(props){
    const {
        hourOptions, 
        selectedHour
    } = props

    return (
        <div>
            <p>Hours</p>
            <select>
                {hourOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

        </div>
    )
}