{/*import fakeContracts from '../init/initializeContracts';*/}


let actions = {

  fetchContracts : function(){
    return dispatch =>{
      setTimeout(()=>{
        dispatch({
          type : 'FETCH_CONTRACTS',
          contracts: fakeContracts
        })
      },1000)
    }
  },

  addUser: function(name,email) {
    return {
      type: 'ADD_USER',
      name: name,
      email:email
    }
  },

  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function(){
    return {
      type: 'CREATE_USER_ID',
      id : Math.round(Math.random()*100)
    }
  },

  createNewUserIdIfOdd : function(){
    return( dispatch, getState) => {
      const{user}=getState()
      if(user.id % 2 === 0){
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsyn : function (){
    return( dispatch, getState) => {
      setTimeout(()=> {
        dispatch(actions.createNewUserId())
      },2500)
    }
  }

}

export default actions
