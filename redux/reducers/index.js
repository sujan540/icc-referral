import{ combineReducers} from 'redux'
import userReducer from './userReducer'

var {reducer: formReducer} = require('redux-form')

const rootReducer = combineReducers({
  users: userReducer
})

export default rootReducer
