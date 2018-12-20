import { combineReducers } from 'redux';
import cardReducer from './reducer_card'
import callbackReducer from './reducer_callback'
import userReducer from './reducer_user'

const rootReducer = combineReducers({
   card : cardReducer,
   message : callbackReducer,
   user : userReducer
});

export default rootReducer;
