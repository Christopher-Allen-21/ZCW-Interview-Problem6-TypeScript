import React from 'react'
import '../styling/HoursRow.css';

export default function HoursRow(props){
    const {
        hourOptions, 
        selectedHour,
        onChangeHour
    } = props

    return (
        <>
            <p>Hours</p>
            <select className="select-css" value={selectedHour} onChange={onChangeHour}>
                {hourOptions.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </>
    )
}