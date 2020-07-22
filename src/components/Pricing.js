import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'

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
            <div className='credit-info'>
            **Card: 4242 4242 4242 4242**
            <br />
            **Any date after today, CVC: 123**
            </div>
            <Table striped>
                <tr>
                    <td className='font-weight-bold'>Subtotal</td>
                    <td className='d-flex justify-content-end'>{calcSubtotal()}</td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Tax</td>
                    <td className='d-flex justify-content-end'>{calcTax()}</td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Total</td>
                    <td className='d-flex justify-content-end'>{calcTotal()}</td>
                </tr>
            </Table>
            {renderPayButton()}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps)(Pricing)