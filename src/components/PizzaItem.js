import React from 'react'
import { connect } from 'react-redux'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { addToCart } from '../redux/actions'
import '../styles/PizzaItem.css'
    
const PizzaItem = ({ pizza, addToCart }) => {
    const { name, ingredients, image } = pizza

    return (
        <CardDeck>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant='top' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            ingredients.join(', ')
                        }
                    </Card.Text>
                    <Button 
                        onClick={() => addToCart(pizza)}
                        variant='primary'
                    >
                        Add To Cart
                    </Button>
                </Card.Body>
            </Card>
        </CardDeck>
        
    )
}

export default connect(null, { addToCart })(PizzaItem)



















// import React from 'react'

// const PizzaItem = ({ name, description }) => {
    
    //     return (
    //         <div className="ui container center aligned">
    //             <div className="ui segment">
    //                 <div className="header">{name}</div>
    //                 <div>{description}</div>
    //                 <button 
    //                 className="button" 
    //                 type="submit">add to cart</button>
    //             </div>
    //         </div>
    //     )
    // }
    
    // export default PizzaItem