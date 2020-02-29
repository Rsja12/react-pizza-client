import React from 'react'
import './Home.css'
import Navigation from '../components/Navigation'
import HomeText from '../components/HomeText'

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <HomeText />
        </div>
    )
}

export default Home
