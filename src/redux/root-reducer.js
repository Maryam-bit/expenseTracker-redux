import {combineReducers} from 'redux'
import transactionReducer from './transaction/transaction.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['transaction']
}

const rootReducer = combineReducers ({
    transaction: transactionReducer
})
export default persistReducer(persistConfig, rootReducer);