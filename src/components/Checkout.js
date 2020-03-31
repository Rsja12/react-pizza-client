import React from 'react'

import '../styles/Checkout.css'

const Checkout = ({ cart }) => {

    if (cart.length === 0) {
        return (
            <div className="checkout">
                <button className="ui disabled button">Checkout</button>
            </div>
        )
    } 
    return (
        <div className="checkout">
                <button 
                onClick={ () => {
                    alert("Thanks! We'll have your order ready for pickup in about 15 min!")
                    window.location.reload(false)
                } }
                className="ui orange button">Checkout</button>
            </div>
    )
}

export default Checkout 


