import React,{Component} from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../redux/actions'

function mapDispatchToProps(dispatch){
	return {
		actions:bindActionCreators(actions,dispatch)
	}
}

function mapStateToProps(state){
	return state
}

class TodoList extends Component{

  render(){
    return (
      <ul>
        {
          this.props.todos.map((todo)=>{
            return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
          })
        }
      </ul>
  )
  }
}

export default TodoList
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
