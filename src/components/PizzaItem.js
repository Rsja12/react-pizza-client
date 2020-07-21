import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { addToCart } from '../redux/actions'
import '../styles/PizzaItem.css'
    
const PizzaItem = ({ pizza, addToCart }) => {
    const { name, ingredients } = pizza

    return (
        <div className="ui container center aligned">
            <div className="ui segment">
                <div className="header">{name}</div>
                <div className="content">
                   {
                       ingredients.join(', ')
                   }
                </div>
                <Button
                    outline
                    color='warning' 
                    onClick={() => addToCart(pizza)}
                    // className="button" 
                    type="submit">
                        add to cart
                </Button>
            </div>
        </div>
    )
}

export default connect(null, { addToCart })(PizzaItem)



















// import React from 'react'

// const PizzaItem = ({ name, description }) => {
    
    //     return (
    //         <div className="ui container center aligned">
    //             <div className="ui segment">
    //                 <div className="header">{name}</div>
    //                 <div>{description}</div>
    //                 <button 
    //                 className="button" 
    //                 type="submit">add to cart</button>
    //             </div>
    //         </div>
    //     )
    // }
    
    // export default PizzaItem