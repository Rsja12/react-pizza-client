import React from 'react'
import '../styles/Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <NavLink to="/" exact className="item">Home</NavLink>
                <NavLink to="/about" exact className="item">About</NavLink>
                <NavLink to="/pizzas" exact className="item">Menu</NavLink>
                <NavLink to="/pizzas/new" exact className="item">Make Your Own</NavLink>
                <div className="ui right inverted secondary pointing menu">
                    <NavLink to="/cart" exact className="item cart"><i className="shopping cart icon"></i>Cart </NavLink>    
                </div>
            </div>
        </div>
    )
}

export default Navigation

// test
