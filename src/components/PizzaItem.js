import React from 'react'

const PizzaItem = () => {
    return (
        <div className="ui container center aligned">
            <div className="ui segment">
                <div className="header">{name}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}

export default PizzaItem
