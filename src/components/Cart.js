import React from 'react'

import Navigation from './Navigation'
import CartList from './CartList'

const Cart = () => {
    return (
        <div>
            <Navigation />
            <CartList />
        </div>
    )
}

export default Cart

// Use mapStateToProps to access cart
// Pass it to CartList?


