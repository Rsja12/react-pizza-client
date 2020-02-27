import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from '../components/Navigation'


export class Menu extends Component {

    componentDidMount() {
        this.props.fetchMenu()
    }

    renderMenu() {
        
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

export default connect(mapStateToProps, { fetchMenu: fetchMenu  })(Menu)
