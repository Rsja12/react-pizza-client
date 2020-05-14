import React from 'react'
import { Router, Route } from 'react-router-dom'

import history from '../history'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Cart from '../components/Cart'
import MakeYourOwn from './MakeYourOwn'
import '../styles/App.css'

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/pizzas" component={Menu} />
                <Route exact path="/pizzas/new" component={MakeYourOwn} />
                <Route exact path="/cart" component={Cart} />
            </div>
        </Router>
    )
}

export default App
