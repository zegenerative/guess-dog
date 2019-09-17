const reducer = (state = [], action = {}) => {
    console.log(action)
    switch (action.type) {
        case 'INITIALISE_STORE':
            return [ ...state, ...action.payload.dogsList ]
    default:
      return state 
    }
}

export default reducer