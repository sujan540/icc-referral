import React from 'react'
import { render } from 'react-dom'
//import { render,method1 } from 'react-dom'
// var render = require('react-dom').render;
//var method1=require('react-dom').method1;

import App from '../components/App'

render(
	//define the encompassing component,
	// DOM element we want to mount it to
	<App/>,
	document.getElementById('app')

)
