import React,{Component} from 'react'

class UserInfo extends Component{

  handleNewId(){
    this.props.actions.createNewUserId()
  }

  handleNewIdIfOdd(){
    this.props.actions.createNewUserIdIfOdd()
  }

  handleNewIdAsyn(){
    this.props.actions.createNewUserIdAsyn()
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <div> Username: {this.props.user.username}</div>
        <div> Id : {this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update ID only if Odd</button>
        <button onClick={this.handleNewIdAsyn.bind(this)}>Update asyn</button>
      </div>
    )
  }
}

export default UserInfo
