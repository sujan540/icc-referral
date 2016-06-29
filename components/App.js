import React,{ Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from  'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../redux/actions'



class App extends Component{
	render(){
		return (
			<div className="app">
				<div>Todo List</div>
				<TodoInput addTodo={this.props.actions.addTodo}/>
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
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

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
