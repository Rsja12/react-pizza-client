import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from './About'
import Menu from './Menu'
import './App.css'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/menu" component={Menu} />
            </div>
        </Router>
    )
}

export default App
