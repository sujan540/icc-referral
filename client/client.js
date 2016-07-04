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
	}],
	user:{
		username: 'Sujan',
		id:540
	},
	userList:[{name:'Pam',email:'ladophaasers@icct.com'},{name:'Scott',email:'spreston@icct.com'},{name:'foo',email:'foo@foo.com'}],
	contracts: [{
	  id: 0,
	  description: 'Use Reduxx',
	  finished: 'true'
	},
	{
	  id: 1,
	  description: 'new contract',
	  finished: 'false'
	},
	{
	  id: 3,
	  description: 'Old  CONTRACT',
	  finished: 'true'
	},
	{
	  id: 77,
	  description: 'shaka brahss',
	  finished: 'false'
	}],
	searchTerm : ''
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
