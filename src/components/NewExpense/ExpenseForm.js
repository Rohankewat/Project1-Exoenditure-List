import "./ExpenseForm.css"

import React, { useState } from 'react';

function ExpenseForm(props) {

    let [enterTitle, setEnterTitle] = useState('');
    let [enterAmount, setEnterAmount] = useState('');
    let [enterDate, setEnterDate] = useState('');


    function titleHandler(event) {
        setEnterTitle(event.target.value);
    };

    function amountHandler(event) {
        setEnterAmount(event.target.value)
    };

    function dateHandler(event) {
        setEnterDate(event.target.value)
    };

    function submit(event) {
        event.preventDefault();

        const expenseData = {
            EmployeeId: 42,
            EmployeeName: new Date(enterDate),
            Department: enterTitle,
            DateOfJoining: "2021-12-12",
            PhotoFileName: enterAmount,
        }
        console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setEnterTitle("");
        setEnterAmount("");
        setEnterDate("");
    }
    return (
        <div className="expenseForm">
            <form onSubmit={submit}>
                <div>
                    <label className="title-label">Title</label>
                    <input type="text" className="inp1" value={enterTitle} onChange={titleHandler}></input>
                </div>
                <div>
                    <label className="amount-label">Amount</label>
                    <input type="number" min="0.01" step="0.01" className="inp2" value={enterAmount} onChange={amountHandler}></input>
                </div>
                <div>
                    <label className="date-label">date</label>
                    <input type="date" className="inp3" value={enterDate} onChange={dateHandler}></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;