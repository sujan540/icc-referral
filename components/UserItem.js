import React,{Component} from 'react'

class UserItem extends Component{

  handleDelete(){
    this.props.actions.deleteUser(this.props.user.id)
  }

  render(){
    return (
      <li>
        <div>name: {this.props.user.name}</div>
        <div>email: {this.props.user.email}</div>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
  )
  }
}

export default UserItem
