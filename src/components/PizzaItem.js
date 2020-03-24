import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../actions'
import './PizzaItem.css'
    
    export class PizzaItem extends Component {

    handleBtn = (id) => {
       this.props.addToCart(id)
    }

    render() {
        const { name, description } =  this.props
        console.log(this.props)
        // console.log(this.props)
        return (
            <div className="ui container center aligned">
                <div className="ui segment">
                    <div className="header">{name}</div>
                    <div>{description}</div>
                    <button 
                        onClick={ this.handleBtn }
                        className="button" 
                        type="submit">add to cart
                    </button>
                </div>
            </div>
        )
    }
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