import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../actions'
import Navigation from './Navigation'
import CartList from './CartList'
import Pricing from './Pricing'
import Checkout from './Checkout'
import '../styles/Cart.css'

export class Cart extends Component {

    renderCart() {
        if ( this.props.cart.length === 0 ) {
            return <div className="cart-msg">Your cart is currently empty</div>
        } else {
            // figure out key
            return this.props.cart.map( pizza => <CartList pizza={pizza} remove={this.props.removeFromCart} /> )
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="cart-container"> 
                    { this.renderCart() }   
                </div>
                <Pricing cart={this.props.cart} />
                <Checkout cart={this.props.cart}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps, { removeFromCart })(Cart)


