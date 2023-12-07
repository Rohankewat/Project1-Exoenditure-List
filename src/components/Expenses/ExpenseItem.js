import "./ExpenseItem.css"

import ExpenseDate from "./ExpenseDate"

import Card from "../UI/Card";

import React from 'react';

let ExpenseItem = (props) => {

    return (
        <Card className="main-container">
            <div className="date">
                <ExpenseDate date={new Date(props.date)} />
            </div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="amount">
                ${props.amount}
            </div>
        </Card>
    )
}

export default ExpenseItem;