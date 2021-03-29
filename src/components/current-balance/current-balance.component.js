import React from 'react'
import './current-balance.styles.scss'
import { connect } from 'react-redux'

const CurrentBalance = ({ transaction }) => {
    let result = transaction.map(amount => amount.amount);
    const total = result.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div className="current-balance text-center">
            <p>CURRENT BALANCE:</p>
            <span>${total}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    transaction: state.transaction.transaction
})
export default connect(mapStateToProps)(CurrentBalance)