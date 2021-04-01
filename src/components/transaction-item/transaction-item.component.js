import React from 'react'
import './transaction-item.styles.scss'
import {deleteTransaction} from '../../redux/transaction/transaction.actions'
import {connect} from "react-redux"
const TransactionItems = (props) => {

    const {text,amount, id} = props.transactionItem
    console.log('indexxxxxxx',props.index)
    console.log(id)

    
  const deleteData = (id) =>{
    console.log("Key :", id)
    props.deleteTransaction(id)
  }
    
    return (
        <>
            <div className='transaction-item'>
                <span className="text">{text}</span>
                <button className="arrow" onClick={() => deleteData(props.index)}>&#10006;</button>
                <span className="amount">${amount}</span>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteTransaction: (id) => dispatch(deleteTransaction(id))
})
export default connect(null,mapDispatchToProps)(TransactionItems);