import {GET_RANDOM_BREED,} from '../actions/types';
import {SET_DOGS_LIST,} from '../actions/types';
import {SET_RANDOM_IMAGE_URL,} from '../actions/types';



const initialState = {
 game1 : null,
 dogs : null,
 random : null
};

export default function(state = initialState, action) {
  switch (action.type) {
   
    case GET_RANDOM_BREED:
       
      return {
        ...state,
        game1: action.payload,
        
      };
      case SET_DOGS_LIST:
       
      return {
        ...state,
        dogs: action.payload,
        
      };

      case SET_DOGS_LIST:
       
        return {
          ...state,
          mainpage: action.payload,
          
        };

        case SET_RANDOM_IMAGE_URL:
       
          return {
            ...state,
            random: action.payload,
            
          };
   
    default:
      return state;
  }
}