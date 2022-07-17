import counterReducer from './counter'
import card from './card'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter:counterReducer,
    card1:card
})

export default allReducers