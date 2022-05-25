import {combineReducers} from 'redux'
import countReducer from './Counter/Reducer'

const rootReducer = combineReducers({
    myCounter : countReducer
})

export default rootReducer