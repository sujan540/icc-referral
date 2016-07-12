import React,{Component} from 'react'
import UserItem from './UserItem'
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

class UserList extends Component{

  render(){
    return (
      <ul>
        {
          this.props.users.map((user)=>{
            return <UserItem key={user.id} user={user} actions={this.props.actions}/>
          })
        }
      </ul>
  )
  }
}

export default UserList
export default connect(mapStateToProps,mapDispatchToProps)(UserList)
