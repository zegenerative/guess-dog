import { combineReducers } from 'redux'
import game from './game'
import dogsList from './dogsList'
import score from './score'

export default combineReducers({
      dogsList,
      breedAndUrl,
      game
  })