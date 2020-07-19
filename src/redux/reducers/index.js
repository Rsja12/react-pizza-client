import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import pizzaReducer from './pizzaReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    menu: menuReducer,
    pizza: pizzaReducer,
    cart: cartReducer
})