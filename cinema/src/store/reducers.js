import { combineReducers } from 'redux';
import { signInReducer } from './signIn/reducers'
import { signUpReducer } from './signUp/reducers'
import { allDataReducer } from './slider/reducers'


export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  allData: allDataReducer
})
