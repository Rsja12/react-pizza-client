import React from 'react'

const CartList = props => {
    const { name, description, price } = props.pizza
     
    return (
        <div className="ui middle aligned divided list">
            <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{description}</div>
                <div className="right floated content">
                    <div>{price}</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CartList
