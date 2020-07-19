import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMenu } from '../redux/actions'
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
                { this.renderMenu() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.menu
})

export default connect(mapStateToProps, { fetchMenu })(Menu)
