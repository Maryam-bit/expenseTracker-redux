import React from 'react'
import IncomeExpense from "../total-income-expense/total-income-expense.component"
import Input from '../input/input.component'
import './add-transaction-preview.styles.scss'

const AddTransactionPreview = () => {
    return (
        <div className="add-transaction-preview">
            <IncomeExpense/>
            <Input/>
        </div>
    )
}
export default AddTransactionPreview