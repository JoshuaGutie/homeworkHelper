import questionReducer from './question'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    questionReducer
})

export default allReducers;