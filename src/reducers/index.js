const reducer = (state = 0, action = {}) => {
    switch (action.type) {
        case 'INITIALISE_STORE':
            return action.payload
    default:
      return state 
    }
  }

  export default reducer