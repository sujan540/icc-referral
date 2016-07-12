import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	users:[{
		id:1,
		name:'Pam',
		email:'phaasers@icct.com'
	},{
		id:2,
		name:'Scott',
		email:'spreston@icct.com'
	},{
		id:3,
		name:'foo',
		email:'foo@foo.com'
	}]
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
	<App/>
	</Provider>,
	document.getElementById('app')

)
