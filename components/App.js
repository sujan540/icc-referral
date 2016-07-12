import React,{ Component } from 'react'
import UserList from './UserList'
import AddUser from './AddUser'
import { connect } from  'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../redux/actions'
import { Redirect, Router, Route, browserHistory, hashHistory } from 'react-router'
import MainLayout from './MainLayout'
import Home from './Home'




class App extends Component{
	render(){

		return (

			<div className="app">

				<Router history = {hashHistory}>
					<Route component={MainLayout} >
						<Route name="home" path="/" component={Home} />
						<Route path="userList" component={UserList} />
						<Route path="addUser" component={AddUser} />
		        <Redirect from="/" to="/home" />

					</Route>
				</Router>

			</div>
		)
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
