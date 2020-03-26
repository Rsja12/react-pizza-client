import React from 'react'
import Navigation from '../components/Navigation'
import '../styles/About.css'
import AboutText from '../components/AboutText'

const About = () => {
    return (
        <div className="about">
            <Navigation />
            <AboutText />
        </div>
    )
}

export default About
