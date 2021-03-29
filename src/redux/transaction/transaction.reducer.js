import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { transactionActionType } from './transaction.types'
const INITIAL_STATE = {
    transaction: []
}
let result = INITIAL_STATE.transaction.map(aa => aa.id);


const transactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case transactionActionType.SET_TRANSACTION:

            return {
                ...state,
                transaction: [...state.transaction, { ...action.payload }]
            }
        case transactionActionType.DELETE_TRANSACTION:
            return {
                ...state,
                transaction: state.transaction.filter(trans => trans.transaction.transaction !== action.payload)
            }

        default:
            return state;
    }
}

export default transactionReducer