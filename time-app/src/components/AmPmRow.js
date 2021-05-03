import React from 'react'
import '../styling/AmPmRow.css';

export default function AmPmRow(props){
    const {
        amPmOptions,
        selectedAmPm
    } = props

    return (
        <div>
            <p>AM/PM</p>
            <select>
                {amPmOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

        </div>
    )
}