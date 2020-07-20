import React from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'
import Pricing from './Pricing'
import Checkout from './Checkout'
import '../styles/Cart.css'

const Cart = ({ cart }) => {

    const renderCart = () => {
        if ( cart.length === 0 ) {
            return <div className="cart-msg">Your cart is currently empty</div>
        } else {
            return cart.map( 
                pizza => <CartList key={pizza.id} pizza={pizza}  />
            )
        }
    }

    return (
        <div>
            <div className="cart-container"> 
                {
                    renderCart()
                }   
            </div>
            <Pricing cart={cart} />
            <Checkout cart={cart}/>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps)(Cart)


