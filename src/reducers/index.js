import { combineReducers } from 'redux'
import breedAndUrl from './breedAndUrl'
import dogsList from './dogsList'
import score from './score'

export default combineReducers({
      dogsList,
      breedAndUrl,
      score
  })