export default (pizza={ name: '', description: [] }, action) => {
    switch (action.type) {
        case 'POST_PIZZA':
            return action.payload
        default:
            return pizza
    }
} 