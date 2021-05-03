import React from 'react'
import '../styling/AmPmRow.css';

export default function AmPmRow(props){
    const {
        amPmOptions,
        selectedAmPm,
        onChangeAmPm
    } = props

    return (
        <>
            <p>AM/PM</p>
            <select className="select-css" value={selectedAmPm} onChange={onChangeAmPm}>
                {amPmOptions.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    )
}