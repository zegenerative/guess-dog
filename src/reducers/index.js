import { combineReducers } from 'redux'
import breedAndUrl from './breedAndUrl'
import dogsList from './dogsList'

export default combineReducers({
      dogsList,
      breedAndUrl
  })