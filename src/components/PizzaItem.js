import React from 'react'
import { connect } from 'react-redux'

// import history from '../history'
import { addToCart } from '../redux/actions'
import '../styles/PizzaItem.css'
    
const PizzaItem = ({ pizza, addToCart }) => {
    const { name, description, price } = pizza

    const handleClick = () => {
       addToCart(pizza)
    }

    return (
        <div className="ui container center aligned">
            <div className="ui segment">
                <div className="header">{name}</div>
                <div className="content">{description}</div>
                <div>{price}</div>
                <button 
                    onClick={ handleClick }
                    className="button" 
                    type="submit">
                        add to cart
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, { addToCart })(PizzaItem)



















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