// root reducer 

import { combineReducers } from 'redux'
import post from './postReducer'
// import auth from './authReducer'
// import socketReducer from './socketReducer'
const rootReducer = combineReducers({
  post : post
  });
  
  export default rootReducer;
