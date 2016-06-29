import React,{Component} from 'react'
import actions from '../redux/actions'

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
    this.props.dispatch(actions.addTodo(this.state.inputText))
  }


  render(){
    return (
      <div>
        <input
          type="text"
          placeholder ="Type TODO"
          value ={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />

        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
    </div>

  )
  }
}

export default TodoInput
