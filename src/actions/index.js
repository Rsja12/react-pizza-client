export const fetchMenu = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/pizzas')
        .then(res => res.json())
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

export const addToCart = (pizza) => {
    return {
        type: 'ADD_TO_CART',
        payload: pizza 
    }
}
