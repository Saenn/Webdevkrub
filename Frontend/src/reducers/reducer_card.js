import { FETCH_CARD } from '../actions/index';

export default function(state = [], action) {
     
    if(action.type === FETCH_CARD){
      return [action.payload,...state];
    }
    return state;
}