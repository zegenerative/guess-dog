const reducer = (state = 0, action = {}) => {
    switch (action.type) {
        case 'IINITIALISE_STATE':
            console.log('I AM UPDATING THE STATE WITH', action.payload)
            return action.payload
    default:
      return state 
    }
  }

  export default reducer