const reducer = (state = [], action = {}) => {
    console.log(action)
    switch (action.type) {
        case 'INITIALISE_STORE':
            return [...action.payload.dogsList ]//deleted ...state as initialising store
    default:
      return state 
    }
}

export default reducer