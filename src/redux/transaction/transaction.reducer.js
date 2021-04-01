import { transactionActionType } from './transaction.types'

const INITIAL_STATE = {
    transaction: []
}
let result = INITIAL_STATE.transaction.map(aa => aa.id);


const transactionReducer = (state = INITIAL_STATE, action) => {
    console.log('acccccccc',action)
    switch (action.type) {
        case transactionActionType.SET_TRANSACTION:
            return {
                ...state,
                transaction: [  ...state.transaction,action.payload ]
            }

        case transactionActionType.DELETE_TRANSACTION:
            return ({
                ...state,
                transaction: state.transaction.filter((item, index) => index !== action.payload)
            })

        default:
            return state;
    }
}

export default transactionReducer