export default ( state = { name: '', description: [] }, action ) => {

    switch( action.type ) {
        case 'ADD_TO_CART':
            
            debugger
            return action.payload
        default:
            return state 
    }

}   