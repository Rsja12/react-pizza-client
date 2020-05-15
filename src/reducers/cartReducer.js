import _ from 'lodash'

export default ( state = {}, action ) => {

    const pizzaObj = action.payload

    switch( action.type ) {
        case 'ADD_TO_CART':
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
        // case 'ADD_TO_CART':            
        //     // Returns a copy of the current array plus whatever object is being added 
        //     const pizzaObj = action.payload
        //     pizzaObj.quantity = pizzaObj.quantity + 1 || 1
        //     return [...state, pizzaObj ]
        // case 'REMOVE_FROM_CART':
        //     // Finds index of first match 
        //     const firstMatch = state.indexOf(action.payload)
        //     // filters out obj with index === firstMatch
        //     return state.filter( (obj, idx) => idx !== firstMatch )
        default: 
            return state 
    }

}   

