import React from 'react'
import CurrentBalance from '../current-balance/current-balance.component'
import AddTransactionPreview from '../add-transaction-preview/add-transaction-preview.component'
import TransactionHistory from '../transaction-history/transaction-history.component'

const Body = () => {
    return (
        <div className="container body">
                    <CurrentBalance />
                    <div className="row">
                        <div className="col-md-6">
                            <AddTransactionPreview/>
                        </div>
                        <div className="col-md-6">
                            <TransactionHistory/>
                        </div>
                    </div>
        </div>
    )
}

export default Body