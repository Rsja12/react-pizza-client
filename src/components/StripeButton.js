import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

import '../styles/Checkout.css'
import { paymentSuccess } from '../redux/actions'

const StripeButton = ({ price, history, paymentSuccess }) => {
    const stripePrice = price * 100
    const publishableKey = 'pk_test_51H5yPuIOABoLmy2nqGUDyOvMUhsPvGDGkH3fTVMGPiaZF3AGoWQ69JtHaoMZ0YwHjrkSiki7sMhcrcmg0cNmyU1d00XN57Y0hk'

    // token that would get set to backend 
    const onToken = token => {
        console.log(token)
        paymentSuccess()
        history.push('/success')
    }

    return (
        <div className='checkout'>
            <StripeCheckout 
                label='Pay Now'
                name='React Pizza'
                billingAddress
                shippingAddress
                description={`Your total is $${price}`}
                amount={stripePrice}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default withRouter(connect(null, { paymentSuccess })(StripeButton))
