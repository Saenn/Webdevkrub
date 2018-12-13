import { CALL_BACK } from '../actions/index';

export default function(state = [], action) {
    if (action.type === CALL_BACK) {
      return [action.payload, ...state];
    }    
    return state;
}