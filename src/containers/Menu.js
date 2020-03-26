import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMenu } from '../actions'
import Navigation from '../components/Navigation'
import PizzaItem from '../components/PizzaItem'


export class Menu extends Component {

    componentDidMount() {
        this.props.fetchMenu()
    }

    renderMenu() {
        return this.props.menu.map( pizza => {
            return <PizzaItem pizza={pizza} key={pizza.id} />
        }   )
    }

    render() {
        return (
            <div>
                <Navigation />
                <h1 style={{ textAlign: 'center' }}>House Pizzas</h1>
                { this.renderMenu() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.menu
})

export default connect(mapStateToProps, { fetchMenu })(Menu)
