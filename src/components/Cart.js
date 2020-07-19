import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeFromCart } from '../redux/actions'
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
            return this.props.cart.map( pizza => <CartList key={pizza.id} pizza={pizza} remove={this.props.removeFromCart} /> )
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


