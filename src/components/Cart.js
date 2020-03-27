import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from './Navigation'
import CartList from './CartList'
import Pricing from './Pricing'
import '../styles/Cart.css'

export class Cart extends Component {

    renderCart() {
        return this.props.cart.map( pizza => {
            return <CartList pizza={pizza}  />
        } )
    }

    render() {
        console.log(this.props.cart)
        return (
            <div>
                <Navigation />
                <div className="cart-container"> 
                    { this.renderCart() }   
                </div>
                <Pricing cart={this.props.cart}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart)


