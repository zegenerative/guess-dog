import { combineReducers } from 'redux'
import game1 from './game1'
import setDogsList from './setDogsList'

export default combineReducers({
      setDogsList,
      game1
  })