const reducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'GET_BREED_AND_URL':
            console.log()
            return { ...action.payload }
    default:
      return state 
    }
  }

  export default reducer