import React from 'react'
import '../styling/MinutesRow.css';

export default function MinutesRow(props){
    const {
        minuteOptions, 
        selectedMinute,
        onChangeMinute
    } = props

    return (
        <>
            <p>Minutes</p>
            <select className="select-css" value={selectedMinute} onChange={onChangeMinute}>
                {minuteOptions.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </>
    )
}