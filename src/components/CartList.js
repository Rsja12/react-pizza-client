import React from 'react'

const CartList = props => {
     const { name, description, price } = props.pizza
    return (
        <div className="ui container center aligned">
            <div className="ui segment">
                <div className="header">{name}</div>
                <div>{description}</div>
                <div>{price}</div>
            </div>
        </div>
    )
}

export default CartList
