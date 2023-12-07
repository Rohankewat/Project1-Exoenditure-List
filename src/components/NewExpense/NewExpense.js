import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    function onSaveExpenseDataHandler(enterExpenseData) {
        const expensesData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        console.log(expensesData)

        props.onAddExpense(expensesData);
    }
    return (
        <div>
            <ExpenseForm
                onSaveExpenseData=
                {onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;