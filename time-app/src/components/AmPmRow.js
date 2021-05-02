import React from 'react'
import '../styling/AmPmRow.css';

export default function HoursRow(){
    return (
        <div>
            <p>AM/PM</p>
            <select>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>

        </div>
    )
}