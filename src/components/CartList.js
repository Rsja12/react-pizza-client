import React from 'react'

import '../styles/Cart.css'

const CartList = props => {
    const { name, description } = props.pizza
     
    return (
        <div className="ui middle aligned divided list">
            <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{description}</div>
                <div className="right floated content">
                    <button className="ui button">Remove</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CartList
