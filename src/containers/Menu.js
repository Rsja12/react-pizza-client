import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from '../components/Navigation'


export class Menu extends Component {

    componentDidMount() {
        this.props.fetchMenu()
    }


    render() {
        return (
            <div>
                <Navigation />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.menu
})

export default Menu
