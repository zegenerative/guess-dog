const reducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'ADD_URL_RANDOMBREED':
            console.log()
            return {...state, ...action.payload}
    default:
      return state 
    }
  }

  export default reducer