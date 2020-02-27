import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './containers/App'
 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)