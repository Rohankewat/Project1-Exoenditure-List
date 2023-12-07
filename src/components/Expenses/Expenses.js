import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

import Card from "../UI/Card";

import React from 'react';

let Expenses = (props) => {
    return (
        <Card className='expenses'>

            {
                props.items.map(
                    (expenditure) => (
                        <ExpenseItem
                            key={expenditure.EmployeeId}
                            date={expenditure.EmployeeName}
                            title={expenditure.Department}
                            amount={expenditure.PhotoFileName}
                            uniqe={expenditure.DateOfJoining}
                        />
                    )
                )
            }
        </Card>
    )
}

export default Expenses;

