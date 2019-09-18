export const getBreedAndUrl = () => {
    return (dispatch, getState) => {
        const dogsList = getState().dogsList
        const random = Math.floor((Math.random() * dogsList.length) - 1)
        const randomBreed = dogsList[random]
        const imgUrl = 'https://dog.ceo/api/breed/' + randomBreed + '/images/random'
        dispatch({
            type: 'GET_BREED_AND_URL',
            payload: {
                breed: randomBreed,
                imgUrl: imgUrl
            }
         })
    }
}