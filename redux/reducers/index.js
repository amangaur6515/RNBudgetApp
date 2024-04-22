import {combineReducers } from 'redux'
import budgetReducer from './budgetReducer'

const myReducer=combineReducers({
    budget:budgetReducer
})

export default myReducer;