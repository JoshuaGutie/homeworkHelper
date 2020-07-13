import questionReducer from './question'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    questionT: questionReducer
})

export default allReducers;