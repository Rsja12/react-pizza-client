import React from 'react'
import Navigation from '../components/Navigation'
import Home from '../components/Home'
import About from './About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                {/* <Navigation /> */}
                <Route exact path="/about" component={About} />
            </div>
        </Router>
    )
}

export default App
