import {transactionActionType} from './transaction.types'

const setTransaction = transaction => ({
    type: transactionActionType.SET_TRANSACTION,
    payload: transaction
})

const deleteTransaction = id => ({
    type: transactionActionType.DELETE_TRANSACTION,
    payload: id

})

export {
    deleteTransaction, 
    setTransaction
}