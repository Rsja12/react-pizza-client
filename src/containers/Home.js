import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import HomeText from '../components/HomeText'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <HomeText />
        </div>
    )
}

export default Home
