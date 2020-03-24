import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Menu from './Menu'
import FormParent from './FormParent'
import './App.css'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/pizzas" component={Menu} />
                <Route exact path="/pizzas/new" component={FormParent} />
            </div>
        </Router>
    )
}

export default App
