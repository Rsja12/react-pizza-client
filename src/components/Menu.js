import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PizzaItem from '../components/PizzaItem'

const Menu = props => {
    const { menu } = props
    return (
        <Container fluid>
            <Row md={3}>
                {
                    menu.map(pizza => {
                        return (
                            <Col key={pizza.id}>
                                <PizzaItem pizza={pizza} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
      
    )
}

const mapStateToProps = state => ({
    menu: Object.values(state.menu)
})

export default connect(mapStateToProps)(Menu)
