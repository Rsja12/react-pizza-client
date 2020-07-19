export default ( menu = [], action ) => {

    switch (action.type) {
        case 'FETCH_MENU':
            return action.menu
        default:
            return menu 
    }

}