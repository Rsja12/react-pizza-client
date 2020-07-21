import React from 'react'
import { connect } from 'react-redux'

import '../styles/Pricing.css'
import '../styles/Cart.css'

import StripeButton from './StripeButton'

const Pricing = ({ cart }) => {

    const numOfItems = () => {
        if( cart.length === 0 ) {
            return null
        } else if ( cart.length === 1 ) {
            const [ pizza ] = cart
            return pizza.quantity
        } else {
            const initValue = 0
            const items = cart.reduce( (acc, current) => {
                return acc + current.quantity
            }, initValue )
            return items
        }
    }

    const calcSubtotal = () => {
        return (8.99 * numOfItems()).toFixed(2)
    }

    const calcTax = () => {
        const jsCrazyNum = calcSubtotal() * 0.07
        return jsCrazyNum.toFixed(2)
    }

    const calcTotal = () => {
        return (calcSubtotal() * 1.07).toFixed(2)
    }
        
    const renderPayButton = () => {
        if (cart.length === 0) return
        return <StripeButton price={calcTotal()} />
    }

    return (
        <div className="price">
            <div className="ui middle aligned divided list">
                <div className="item">

                    <div className="content">
                        Subtotal
                    </div>
                    <div className="right floated content">
                        ${ calcSubtotal() } 
                    </div>

                    <div className="content">
                        Tax ( 7% )
                    </div>
                    <div className="right floated content">
                        ${ calcTax() } 
                    </div>

                    <div className="content">
                        Total
                    </div>
                    <div className="right floated content">
                        ${ calcTotal() } 
                    </div>

                </div>
            </div>
            {renderPayButton()}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps)(Pricing)