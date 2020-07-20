import React from 'react'
import { connect } from 'react-redux'

import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions'
import '../styles/Cart.css'

const CartList = props => {

    const { name, description, quantity } = props.pizza 
    return (
        <div className="ui middle aligned divided list">
            <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{description}</div>
                <div className="right floated content">
                    <button 
                    onClick={ () => props.decreaseQuantity(props.pizza) }
                    className="ui icon button">
                        <i className='minus icon'></i>
                    </button> 
                    { quantity }
                    <button 
                    onClick={ () => props.increaseQuantity(props.pizza) }
                    className="ui icon button">
                        <i className='plus icon'></i>
                    </button>
                    <button 
                        className='remove-button'
                        onClick={() => props.removeFromCart(props.pizza)}
                    >
                        Remove Pizza
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
    
}

export default connect
(null, 
    {
        increaseQuantity,
        decreaseQuantity,
        removeFromCart 
    })(CartList)



