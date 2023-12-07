import "./ExpenseDate.css";

import React from 'react';

let ExpenseDate = (props) => {
    let day = props.date.toLocaleString('en-US', { day: '2-digit' });
    let year = props.date.getFullYear();
    let month = props.date.toLocaleString('en-US', { month: 'long' });
    return (
        <div className="date-main-container">
            <div className='day'>{day}</div>
            <div className='year'>{year}</div>
            <div className='month'>{month}</div>
        </div>
    )
}

export default ExpenseDate;