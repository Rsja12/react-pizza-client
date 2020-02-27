import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { postPizza } from '../actions'

export class Form extends Component {

    state ={
        name: '',
        description: '',
        submitted: false 
    }

    handleName = e => {
        this.setState({
            name: e.target.value 
        })
    }

    handleToppings = e => {
        let topping = e.target
        let allToppings
        let newDescription
        let takeOff
        if ( topping.checked ) {
            allToppings = this.state.description.concat(topping.name)
        }
    }

    render() {
        const { name, description } = this.state 
        return (
            <div className="ui container">
                <form className="ui form">
                <h2>Sauce</h2>
                    <div className="inline fields">
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox"
                                name="Tomato Sauce"
                                value={description} 
                                onChange={this.handleToppings} />
                                <label>Tomato Sauce</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Pesto Sauce"
                                value={description} 
                                onChange={this.handleToppings} />
                                <label>Pesto Sauce</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="BBQ Sauce"
                                value={description}
                                onChange={this.handleToppings}
                                 />
                                <label>BBQ Sauce</label>
                            </div>
                        </div>
                    </div>
                <h2>Cheese</h2>
                    <div className="inline fields">
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Mozarella"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Mozarella</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Parmesan"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Parmesan</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Gorgonzola"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Gorgonzola</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Robiola"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Robiola</label>
                            </div>
                        </div>
                    </div>
                <h2>Veggies</h2>
                    <div className="inline fields">
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Banana Peppers"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Banana Peppers</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Black Olives"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Black Olives</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox"
                                name="Cherry Tomatoes"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Cherry Tomatoes</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Basil"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Basil</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Jalapenos"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Jalapenos</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Mushrooms"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Mushrooms</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Pineapple"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Pineapple</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Red Onions"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Red Onions</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Roasted Garlic"
                                value={description} />
                                <label>Roasted Garlic</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Spinach"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Spinach</label>
                            </div>
                        </div>
                    </div>
                    <h2>Meats</h2>
                    <div className="inline fields">
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Pepperoni"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Pepperoni</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Ham"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Ham</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Bacon"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Bacon</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Chicken"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Chicken</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input 
                                type="checkbox" 
                                name="Spicy Sausage"
                                onChange={this.handleToppings}
                                value={description} />
                                <label>Spicy Sausage</label>
                            </div>
                        </div>
                    </div>

                <div>
                    <input 
                    type="text"
                    placeholder="Name your pizza"
                    value={name}
                    onChange={ this.handleName }
                    required
                    />
                </div>

                <div>
                    <button type="submit">Make Pizza</button>
                </div>

            </form>
        </div>
        )
    }
}

export default connect(null, { postPizza: postPizza })(Form)
