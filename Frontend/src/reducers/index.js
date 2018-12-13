import { combineReducers } from 'redux';
import cardReducer from './reducer_card'
import callbackReducer from './reducer_callback'

const rootReducer = combineReducers({
   card : cardReducer,
   message : callbackReducer
});

export default rootReducer;
