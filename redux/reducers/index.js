import{ combineReducers} from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import userListReducer from './userListReducer'
import contractReducer from './contractReducer'
import searchReducer from './searchReducer'

var {reducer: formReducer} = require('redux-form')

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  userList: userListReducer,
  contracts: contractReducer,
  searchTerm:searchReducer,
  form: formReducer

})

export default rootReducer
