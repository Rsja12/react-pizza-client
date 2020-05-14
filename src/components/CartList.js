import React, { Component } from 'react'

import '../styles/Cart.css'

export class CartList extends Component {

    render() {
        const { name, description } = this.props.pizza 
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
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartList



