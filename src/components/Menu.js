import React from 'react'
import { connect } from 'react-redux'

import PizzaItem from '../components/PizzaItem'

const Menu = props => {
    const { menu } = props
    return (
        <div>
            {
                menu.map(pizza => {
                    return <PizzaItem pizza={pizza} key={pizza.id} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    menu: Object.values(state.menu)
})

export default connect(mapStateToProps)(Menu)
