let actions = {

  addUser: function(name, email) {
    return {
      type: 'ADD_USER',
      name: name,
      email: email
    }
  },

  deleteUser: function(id) {
    return {
      type: 'DELETE_USER',
      id: id
    }
  }
}

export default actions
