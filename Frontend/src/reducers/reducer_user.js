import { LOG_IN, LOG_OUT } from '../actions/index';

const initialState = {
    isLoggedIn: false
};

export default function(state = initialState, action) {
    if(action.type === LOG_IN){
        return {
            ...state,
            isLoggedIn: true
        }
    }

    if(action.type === LOG_OUT){
        return {
            ...state,
            isLoggedIn: false
        }
      }

    return state;
}