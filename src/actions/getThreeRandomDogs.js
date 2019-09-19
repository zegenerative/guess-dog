import request from 'superagent'

//fetch 3 random images

export const getThreeRandomDogs = () => {
    return (dispatch, getState) => {
        console.log("getThreeRandomDogs function")

        //here we are checking if there isn't already a list of dogs in the state
        // const dogsList = getState().dogsList

        // if(dogsList !== null) { 
        //     return 
        // } else {
        return request
            .get('https://dog.ceo/api/breeds/image/random/3')
            .then(response =>{
                console.log("response in three random dogs is", response.body.message)
               dispatch({
                    type: 'GET_THREE_DOGS',
                    payload: {
                        threeDogs: response.body.message
                    }
                    //console.log("respons.body G2C is", response.body)
                    //this.updateImgURLsInLocalState(imgURLs)
                })
            })
            .catch(console.error)
        }
}

export const getCorrectDogName = (name)=>{
    return {
        type: 'GET_CORRECT_DOG_NAME',
        payload: {
            correctDogName: name
        }
    }
}




