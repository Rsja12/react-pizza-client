export default ( state = [], action ) => {

    switch( action.type ) {
        case 'ADD_TO_CART':            
            // Returns a copy of the current array plus whatever object is being added 
            const pizzaObj = action.payload
            pizzaObj.quantity = pizzaObj.quantity + 1 || 1
            return [...state, pizzaObj ]
        case 'REMOVE_FROM_CART':
            // Finds index of first match 
            const firstMatch = state.indexOf(action.payload)
            // filters out obj with index === firstMatch
            return state.filter( (obj, idx) => idx !== firstMatch )
        default: 
            return state 
    }

}   