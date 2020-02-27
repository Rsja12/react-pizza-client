import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from './About'
import './App.css'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </div>
        </Router>
    )
}

export default App
