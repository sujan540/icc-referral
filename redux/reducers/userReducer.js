function getNewUserId(users){
  return users.reduce((maxId, user)=>{
    return Math.max(user.id, maxId)
  },-1)+1
}

let userReducer = function (users=[], action){
  switch(action.type){
    case 'ADD_USER':
      return[{
          name: action.name,
          email: action.email,
          id: getNewUserId(users)
        }, ...users]
    case 'DELETE_USER':
      return users.filter((user)=>{
          return user.id !==action.id
        })
    default:
      return users;
  }

}


export default userReducer
