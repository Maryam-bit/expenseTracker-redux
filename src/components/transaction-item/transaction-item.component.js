import React from 'react'
import './transaction-item.styles.scss'
import {deleteTransaction} from '../../redux/transaction/transaction.actions'
import {connect} from "react-redux"
const TransactionItems = ({ transactionItem }) => {

    const {text,amount, id} = transactionItem
    console.log(id)
    return (
        <>
            <div className='transaction-item'>
                <span className="text">{text}</span>
                <button className="arrow" onClick={()=> deleteTransaction(id)}>&#10006;</button>
                <span className="amount">${amount}</span>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteTransaction: transaction=> dispatch(deleteTransaction(transaction))
})
export default connect(null,mapDispatchToProps)(TransactionItems);