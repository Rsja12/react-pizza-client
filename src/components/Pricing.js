import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/Pricing.css'
import '../styles/Cart.css'


export class Pricing extends Component {

    numOfItems = () => {
        if( this.props.cart.length === 0 ) {
            return 0
        } else if ( this.props.cart.length === 1 ) {
            const [ pizza ] = this.props.cart
            return pizza.quantity
        } else {
            const items = this.props.cart.reduce( (a, b) => a.quantity + b.quantity )
            return items
        }
    }

    calcSubtotal = () => {
        return (8.99 * this.numOfItems() ).toFixed(2)
    }

    calcTax = () => {
        const jsCrazyNum = this.calcSubtotal() * 0.07
        return jsCrazyNum.toFixed(2)
    }

    calcTotal = () => {
        return (this.calcSubtotal() * 1.07).toFixed(2)
    }
        

    render() {
        return (
            <div className="price">
                <div className="ui middle aligned divided list">
                    <div className="item">

                        <div className="content">
                            Subtotal
                        </div>
                        <div className="right floated content">
                           ${ this.calcSubtotal() } 
                        </div>

                        <div className="content">
                            Tax ( 7% )
                        </div>
                        <div className="right floated content">
                           ${ this.calcTax() } 
                        </div>

                        <div className="content">
                            Total
                        </div>
                        <div className="right floated content">
                           ${ this.calcTotal() } 
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps)(Pricing)