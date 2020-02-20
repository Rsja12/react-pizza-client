import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <NavLink to="/" exact className="item">Home</NavLink>
                <NavLink to="/about" className="item">About</NavLink>
                <a className="item">Menu</a>
                <a className="item">Create your own</a>
            </div>
        </div>
    )
}

export default Navigation
