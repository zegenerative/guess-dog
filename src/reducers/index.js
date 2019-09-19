import { combineReducers } from 'redux'
import game from './game'
import dogsList from './dogsList'

export default combineReducers({
      dogsList,
      game
  })