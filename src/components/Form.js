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

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, { postPizza: postPizza })(Form)
