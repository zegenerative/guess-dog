import { GET_RANDOM_BREED} from './types';
import request from 'superagent';
import _ from 'lodash';
export const getRandomBreed = (randomBreed) => dispatch => {
    request
            .get('https://dog.ceo/api/breed/' + randomBreed + '/images/random')
            .then(response => {
            const imgUrl = response.body.message
            
            dispatch({
                type: GET_RANDOM_BREED,
                payload: 
                    response.body.message
                
            })
            })
            .catch(console.error)
  };
  
  export const getDogs = () => {
     
    return (dispatch, getState) => {
        const dogsList = getState().dogs
       
  
        request.get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                dispatch({
                    type: 'SET_DOGS_LIST', 
                    payload: Object.keys(response.body.message)
                })
            })
    }
  }
  

  