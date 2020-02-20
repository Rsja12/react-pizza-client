import React from 'react'
import Navigation from '../components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />
            </div>
        </Router>
    )
}

export default App
