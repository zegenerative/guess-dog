import request from 'superagent'

export const getDogName = (imgURLs) => {

    console.log("getDogName is running", imgURLs)

    if(imgURLs !== null){

        const chosenDog = imgURLs[Math.floor(Math.random()*imgURLs.length)]
        const firstIndex = chosenDog.indexOf("eeds")
        const secondIndex = chosenDog.indexOf("/", firstIndex+5)
        const dogNameDisplay = chosenDog.slice(firstIndex+5, secondIndex)

        //getCorrectDogName(dogNameDisplay)
        console.log("dogNameDisplay", )

        return dogNameDisplay
    }

}





//fetch 3 random images

export const getThreeRandomDogs = () => {
    return (dispatch, getState) => {
        console.log("getThreeRandomDogs function")

        //here we are checking if there isn't already a list of dogs in the state
        // const dogsList = getState().dogsList

        // if(dogsList !== null) { 
        //     return 
        // } else {

        const threeDogs = getState().threeDogs
        console.log("threeDogs in getThreeRandomDogs is", threeDogs)
        //if(threeDogs !== null) return


            return request
                .get('https://dog.ceo/api/breeds/image/random/3')
                .then(response =>{
                    console.log("response in three random dogs is", response.body.message)
                dispatch({
                        type: 'GET_THREE_DOGS',
                        payload: {
                            threeDogs: response.body.message
                        }

                    })
                    const newDogName = getDogName(response.body.message)
                    dispatch({
                        type: 'GET_CORRECT_DOG_NAME',
                        payload: {
                            correctDogName: newDogName
                        }
                    })

                   
                
                })
                .catch(console.error)
            }
}

export const getCorrectDogName = (name)=>{

    console.log("getCorrectDogName is running", name)

    return {
        type: 'GET_CORRECT_DOG_NAME',
        payload: {
            correctDogName: name
        }
    }
}



export const updateQuestionNo = () => {
    return {
        type: 'UPDATE_QUESTION_NO'
    }
}



