export const fetchMenu = () => {
    return (dispatch) => {
        // dispatch({ type: "START_FETCHING_MENU" })
        fetch('http://localhost:3000/pizzas')
        .then(res => res.json())
        // .then(menu => console.log(menu))
        .then(menu => dispatch({
            type: 'FETCH_MENU', 
            menu 
        }) )
    }
}