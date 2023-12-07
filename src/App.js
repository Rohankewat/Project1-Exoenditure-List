import Expenses from "./components/Expenses/Expenses";

import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [];
let App = () => {

    let [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    let fetchData = () => {
        fetch("http://127.0.0.1:8000/employee").then(
            (response) => {
                return response.json();
            }
        ).then((data) => {
            console.log(data)
            setExpenses(data)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const ExpenseHandler = (expense) => {
        fetch("http://127.0.0.1:8000/employee", {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        )

    }
    return (
        <div>
            <NewExpense onAddExpense={ExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    )
}

export default App;