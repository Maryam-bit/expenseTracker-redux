import React, { useState } from 'react'
import './input.styles.scss'
import { connect } from 'react-redux'
import { setTransaction } from '../../redux/transaction/transaction.actions'

const Input = ({ setTransaction }) => {
    
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const onSubmit = e => {
        e.preventDefault()
        setText('')
        setAmount('')
    }

    const addIncome = () => {
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        console.log(newTransaction)
        if(text.length > 0 && amount.length>0){
            setTransaction(newTransaction)
        }
    }

    const addExpense = () => {
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: -amount
        }
        console.log(newTransaction)
        if(text.length > 0 && amount.length>0){
            setTransaction(newTransaction)
        }
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input">
                    <span>Text:</span>
                    <input required type="text" value={text} onChange={e => setText(e.target.value)} />
                    <span>Amount:</span>
                    <input required type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <div className="button row">
                    <div className="button_cont" ><button className="example_e inc" onClick={addIncome}>Add Income</button></div>
                    <div className="button_cont" ><button className="example_e exp" onClick={addExpense}>Add Expense</button></div>
                </div>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    setTransaction: transaction => dispatch(setTransaction(transaction))
})
export default connect(null, mapDispatchToProps)(Input);