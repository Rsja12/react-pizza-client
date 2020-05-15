import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increaseQuantity } from '../actions'
import '../styles/Cart.css'

export class CartList extends Component {

    render() {
        console.log(this.props)
        const { name, description, quantity } = this.props.pizza 
        return (
            <div className="ui middle aligned divided list">
                <div className="item">
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{description}</div>
                    <div className="right floated content">
                        <button 
                        onClick={ () => this.props.remove(this.props.pizza) }
                        className="ui icon button">
                            <i className='minus icon'></i>
                        </button> 
                        { quantity }
                        <button 
                        onClick={ () => this.props.increaseQuantity(this.props.pizza) }
                        className="ui icon button">
                            <i className='plus icon'></i>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { increaseQuantity })(CartList)



