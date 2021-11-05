import counterReducer from './counter'
import loggedReducer from './isLogged'
import {combineReducers} from 'redux'

let allReducers = combineReducers({
  myCounter : counterReducer,
  myLogged : loggedReducer
}) 

export default allReducers;