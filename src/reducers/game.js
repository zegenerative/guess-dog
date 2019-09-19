const initial = {
  threeDogs: [],
  correctDogName: '',
  score: 0,
  questionNumber: 1
}

const reducer = (state = initial, action = {}) => {
    switch (action.type) {
        case 'GET_BREED_AND_URL':
            console.log()
            return { ...action.payload }
        case 'GET_THREE_DOGS':
            console.log('GET_THREE_DOGS action')
            return { ...state, ...action.payload }
        case "GET_CORRECT_DOG_NAME":
            console.log('GET_CORRECT_DOG_NAME')
            return {...state, ...action.payload }
        case 'UPDATE_QUESTION_NO':
            console.log("UPDATE_QUESTION_NO")
            return {...state, questionNumber: state.questionNumber + 1 }
    default:
      return state 
    }
  }

  export default reducer