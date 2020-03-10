import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Form from '../components/Form'

export class FormParent extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Form />
            </div>
        )
    }
}

export default FormParent
