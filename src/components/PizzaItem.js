import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../actions'
import '../styles/PizzaItem.css'
    
    export class PizzaItem extends Component {

    handleClick = () => {
       console.log(`I am this pie obj: ${this.props.pizza}`)
       this.props.addToCart(this.props.pizza)
    }

    render() {
        console.log(this.props)
        const { name, description, price } =  this.props.pizza
        return (
            <div className="ui container center aligned">
                <div className="ui segment">
                    <div className="header">{name}</div>
                    <div>{description}</div>
                    <div>{price}</div>
                    <button 
                        onClick={ this.handleClick }
                        className="button" 
                        type="submit">add to cart
                    </button>
                </div>
            </div>
        )
    }
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