import React, { Component } from 'react'
import './PizzaItem.css'
    
    export class PizzaItem extends Component {

    state = {
        items: 0
    }

    handleBtn = () => {
        this.setState( {
            items: this.state.items + 1
        })
    }

    render() {
        const { name, description } =  this.props
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
                    <h1>{this.state.items}</h1>
                </div>
            </div>
        )
    }
}

export default PizzaItem



















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