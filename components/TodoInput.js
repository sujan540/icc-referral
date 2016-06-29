import React,{Component} from 'react'

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
    this.props.addTodo(this.state.inputText)
  }


  render(){
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
