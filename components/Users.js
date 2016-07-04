import React from 'react'
import { Link } from 'react-router'

class Users extends React.Component{
    constructor(props){
      super(props);
    // Here we have access to this.props.params.employeeId
    }

     render() {
      // if you have some data can do this (option 1)
       //var list = [{name:'Pam',email:'phaaser@icct.com'},{name:'Scott',email:'spreston@icct.com'},{name:'foo',email:'foo@foo.com'}];
      var list = this.props
      console.log(list)
         return (
                 <div>
                 test
                   <ul>
                   {list.map(function(item,i) {
                       return <li key={i}><Link to={`/users/${i}`}>{item.name}</Link>{i}-{item.email}</li>
                   })}
                   </ul>
                 </div>
         );

}

}


export default Users
