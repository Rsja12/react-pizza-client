import { MENU_DATA } from './menuData'

const INITIAL_STATE = MENU_DATA

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default menuReducer