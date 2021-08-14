import React from 'react'
import "./total-income-expense.styles.scss"
import { connect } from 'react-redux'

const IncomeExpense = ({ transaction }) => {
    let result = transaction.map(amount => amount.amount);

    const income = result
        .filter(item => item > 0)
        .reduce((acc, item) => Number(acc += item), 0)
        .toFixed(2);

    const expense = (
        result.filter(item => item < 0)
            .reduce((acc, item) => Number(acc += item), 0) * -1
    ).toFixed(2);
    
    return (
        <div className="income-expense">
            <div className="row">
                <div className="col-md-6 income">
                    <span className="text">Income:</span>
                    <span className="amount">${income}</span>
                </div>
                <div className="col-md-6 expense">
                    <span className="text">Expense:</span>
                    <span className="amount">${expense}</span>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    transaction: state.transaction.transaction
})
export default connect(mapStateToProps)(IncomeExpense);