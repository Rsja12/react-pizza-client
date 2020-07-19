import React from 'react'
import { Router, Route } from 'react-router-dom'

import history from '../history'
import About from './About'
import Menu from './Menu'
import Cart from '../components/Cart'
import Navigation from '../components/Navigation'
import '../styles/App.css'

const App = () => {
    return (
        <Router history={history}>
            <Navigation />
            <div>
                <Route exact path="/" component={About} />
                <Route exact path="/pizzas" component={Menu} />
                <Route exact path="/cart" component={Cart} />
            </div>
        </Router>
    )
}

export default App
