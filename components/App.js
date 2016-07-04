import React,{ Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from  'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'
import { Redirect, Router, Route, browserHistory, hashHistory } from 'react-router'
import MainLayout from './MainLayout'
import Home from './Home'
import Users from './Users'
import UserDetail from './UserDetail'
import ContractList from './ContractList'
import AddTravel from './travel/AddTravel'



class App extends Component{
	render(){

		return (

			<div className="app">
				{/*<div>Todo List</div>
				<UserInfo user={this.props.user} actions={this.props.actions}/>
				<TodoInput addTodo={this.props.actions.addTodo}/>
				<TodoList actions={this.props.actions} todos={this.props.todos}/>

				<TodoInput addTodo={this.props.actions}/>
				<TodoList actions={this.props.actions} todos={this.props.todos}/>
			*/}	<div>
				<Router history = {hashHistory}>
					<Route component={MainLayout} >
						<Route name="home" path="/" component={Home} />
						{/*<Route path="addContract" component={ContractForm} />*/}
						<Route path="contracts" component={ContractList} />
						<Route path="addTodo" component={TodoInput} />
						<Route path="todoList" component={TodoList} />
						<Route path="addTravel" component={AddTravel} />
		        {/*<Route path="contracts/:id" component={ContractForm} />*/}
		        <Redirect from="/" to="/contracts" />

					</Route>
				</Router>



				</div>
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
