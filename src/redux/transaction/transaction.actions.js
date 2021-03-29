import {transactionActionType} from './transaction.types'

const setTransaction = transaction => ({
    type: transactionActionType.SET_TRANSACTION,
    payload: transaction
})

const deleteTransaction = transaction => ({
    type: transactionActionType.DELETE_TRANSACTION,
    payload: transaction,

})

export {
    deleteTransaction, 
    setTransaction
}