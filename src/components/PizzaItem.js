import React from 'react'
import './PizzaItem.css'

const PizzaItem = ({ name, description }) => {
    return (
        <div className="ui container center aligned">
            <div className="ui segment">
                <div className="header">{name}</div>
                <div>{description}</div>
                <button
                className="button" 
                type="submit">add to cart</button>
            </div>
        </div>
    )
}

export default PizzaItem




