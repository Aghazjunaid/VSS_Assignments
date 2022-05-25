import {combineReducers} from 'redux'
import calculatorReducer from './Calculator/Reducer'
import countReducer from './Counter/Reducer'

const rootReducer = combineReducers({
    myCounter : countReducer,
    myCalculator : calculatorReducer
})

export default rootReducer