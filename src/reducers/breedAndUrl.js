const reducer = (state = {}, action = {}) => {
  console.log('this is the breedandurl', action.payload)
    switch (action.type) {
        case 'GET_BREED_AND_URL':
            console.log()
            return { ...action.payload }
    default:
      return state 
    }
  }

  export default reducer