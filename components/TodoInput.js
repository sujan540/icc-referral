import React,{Component} from 'react'
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


class TodoInput extends Component{

  constructor(props, context){
    super(props, context)
    this.state = {
      inputText : ''
    }
  }

  handleChange(event){
    //console.log(this)
    //console.log(event.target.value)
    this.setState({
      inputText:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.actions.addTodo(this.state.inputText)
  }


  render(){
      console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder ="Type TODO"
          value ={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />

        <input type="submit" text="Submite"/>
        </form>
    </div>

  )
  }
}

export default TodoInput
module.exports = connect(mapStateToProps,mapDispatchToProps)(TodoInput)
