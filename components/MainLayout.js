import React,{Component} from 'react'
import { Link } from 'react-router'

class MainLayout extends Component{

  constructor(props) {
      super(props);
    }

  render(){
    return (<div>
              <span>Header:</span>
              <Link to="/">Home</Link> |
              <Link to="/addUser">Add User</Link>|
              <Link to="/userList">User List</Link>|
              <hr/>
              <div>
                <h2>Body Content</h2>
              {this.props.children}
              </div>
              <div><hr/>footer</div>
            </div>)
  }
}

export default MainLayout
