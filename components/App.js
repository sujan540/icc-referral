import React,{ Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from  'react-redux'

class App extends Component{
	render(){
		return (
			<div className="app">
				<div>Todo List</div>
				<TodoInput dispatch={this.props.dispatch}/>
				<TodoList todos={this.props.todos}/>
			</div>
		)
	}
}

/*var App = React.createClass({
	render(){
		return <div>This is a definitely module reloading React app now</div>
	}
})*/

function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(App)
