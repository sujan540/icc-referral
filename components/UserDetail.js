import React from 'react'

class UserDetail extends React.Component{

     render() {
      var id = this.props.params.id;
      console.log(this.props.userList);
      var userDetail = this.props.userList[id] || {name:'',email:''};
        return (
                <div>
                  <div>name: {userDetail.name}</div>
                  <div>email: {userDetail.email}</div>
                </div>
        );
  }

}


export default UserDetail
