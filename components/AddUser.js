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


class AddUser extends Component{

  constructor(props, context){
    super(props, context)
    this.state = {
      inputName : '',
      inputEmail : ''
    }
  }

  handleChangeName(event){
    this.setState({
      inputName:event.target.value
    })
  }

  handleChangeEmail(event){
    this.setState({
      inputEmail:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.actions.addUser(this.state.inputName,this.state.inputEmail)
  }


  render(){
      console.log(this.props)
    return (
      <div>
				<p>Add User here</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder ="Type Name"
          value ={this.state.inputName}
          onChange={this.handleChangeName.bind(this)}
        />
        <input
          type="text"
          placeholder ="Type Email"
          value ={this.state.inputEmail}
          onChange={this.handleChangeEmail.bind(this)}
        />

        <input type="submit" text="Submit"/>
        </form>
    </div>

  )
  }
}

export default AddUser
module.exports = connect(mapStateToProps,mapDispatchToProps)(AddUser)
