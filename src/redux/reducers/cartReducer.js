import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'

export default ( state = {}, action ) => {

    const pizzaObj = action.payload

    switch( action.type ) {

        case 'ADD_TO_CART':
            pizzaObj.id = uuidv4()
            pizzaObj.quantity = pizzaObj.quantity + 1 || 1
            return { ...state, [pizzaObj.id]: pizzaObj }
            
        case 'INC_QTY':
            return {
                ...state,
                [pizzaObj.id]: {
                    ...pizzaObj,
                    quantity: pizzaObj.quantity + 1
                }
            }

        case 'DEC_QTY':
            if( pizzaObj.quantity > 1 ) {
                return {
                    ...state,
                    [pizzaObj.id]: {
                        ...pizzaObj,
                        quantity: pizzaObj.quantity - 1
                    }
                } 
            }
            return _.omit( state, pizzaObj.id )

        default: 
            return state 
    }

}   

