import React from 'react'
import '../styles/Navigation.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export class Navigation extends React.Component {

    numOfItems = () => {
        if( this.props.cart.length === 0 ) {
            return 0
        } else if ( this.props.cart.length === 1 ) {
            const [ pizza ] = this.props.cart
            return pizza.quantity
            // console.log(this.props.cart)
        } else {
            const items = this.props.cart.reduce( (a, b) => a.quantity + b.quantity )
            return items
        }

    }

    render() {

        return (
            <div className="ui inverted segment">
                <div className="ui inverted secondary pointing menu">
                    <NavLink to="/" exact className="item">Home</NavLink>
                    <NavLink to="/about" exact className="item">About</NavLink>
                    <NavLink to="/pizzas" exact className="item">Menu</NavLink>
                    <NavLink to="/pizzas/new" exact className="item">Make Your Own</NavLink>
                    <div className="ui right inverted secondary pointing menu">
                        <NavLink to="/cart" exact className="item cart"><i className="shopping cart icon"></i>Cart ( { this.numOfItems() }  ) </NavLink>    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: Object.values(state.cart)
})

export default connect(mapStateToProps)(Navigation)

// test
