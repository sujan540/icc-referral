
let userListReducer = function (userList=[], action){
  switch(action.type){
    case 'ADD_USER':
      return[{
          name: action.name,
          email: action.email,
          //spread syntax ...
        }, ...userList]

    default:
      return userList;
  }

}

export default userListReducer
