import React from 'react'
import { render } from 'react-dom'
//import { render,method1 } from 'react-dom'
// var render = require('react-dom').render;
//var method1=require('react-dom').method1;

import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	todos:[{
		id: 0,
		completed: false,
		text: 'Initial TODO'
	}]
}

let store = configureStore(initialState)

render(
	//define the encompassing component,
	// DOM element we want to mount it to
	<Provider store={store}>
	<App/>
	</Provider>,
	document.getElementById('app')

)
