import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import pizzaReducer from './pizzaReducer'

export default combineReducers({
    menu: menuReducer,
    pizza: pizzaReducer
})