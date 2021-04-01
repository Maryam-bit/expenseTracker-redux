import React from 'react'
import './transaction-history.styles.scss'
import TransactionItems from '../transaction-item/transaction-item.component'
import { connect } from 'react-redux'

const TransactionHistory = ({ transaction }) => {
    return (
        <div className="transaction-history">
            {
                transaction.map((trans, index) => (
                    <TransactionItems key={trans.id} index={index} transactionItem={trans} />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    transaction: state.transaction.transaction
})
export default connect(mapStateToProps)(TransactionHistory);