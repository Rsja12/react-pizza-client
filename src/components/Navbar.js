import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export class Navbar extends React.Component {

    numOfItems() {
        if( this.props.cart.length === 0 ) {
            return 0
        } else if ( this.props.cart.length === 1 ) {
            const [ pizza ] = this.props.cart
            return pizza.quantity
        } else {
            const initValue = 0
            const items = this.props.cart.reduce( (acc, current) => {
                return acc + current.quantity
            }, initValue )
            return items
        }

    }

    render() {

        return (
            <div className="ui inverted segment">
                <div className="ui inverted secondary pointing menu">
                    <NavLink to="/" exact className="item">About</NavLink>
                    <NavLink to="/menu" exact className="item">Menu</NavLink>
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

export default connect(mapStateToProps)(Navbar)