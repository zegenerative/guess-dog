const reducer = (state = null, action = {}) => {
    switch (action.type) {
      case 'SET_DOGS_LIST':
          return [ ...action.payload ]
      default:
        return state 
    }
}

export default reducer