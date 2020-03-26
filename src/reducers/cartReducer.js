export default ( pizza = { name: '', description: [] }, action ) => {

    switch( action.type ) {
        case 'ADD_TO_CART':
            return action.payload
        default:
            return pizza 
    }

}   