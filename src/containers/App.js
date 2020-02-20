import React from 'react'
import Navigation from '../components/Navigation'
import Home from '../components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    )
}

export default App
