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

export const postPizza = (pizza) => {
    return (dispatch) => {
        fetch('http://localhost:3000/pizzas', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(pizza)
        })
        .then(res => res.json())
        .then(pizza => {
            if (pizza.error) {
                alert(pizza.error)
            } else {
                dispatch({
                    type: 'POST_PIZZA',
                    payload: pizza
                })
                alert("Thanks! we'll add it to the list!")
            }
        })
    }
}
