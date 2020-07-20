import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from './About'
import Menu from './Menu'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import '../styles/App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Route exact path="/" component={About} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/cart" component={Cart} />
            </div>
        </BrowserRouter>
    )
}

export default App
