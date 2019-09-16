import { SIGNUP_CHANGE_EMAIL_TEXT,
         SIGNUP_CHANGE_PASSWORD_TEXT,
         SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT
        } from './actions';

const defaultState = {
  email: '',
  password: '',
  repeatPassword: '',
}

export const signUpReducer = (state = defaultState, action) => {
  switch (
    action.type
  ) {
    case SIGNUP_CHANGE_EMAIL_TEXT:
      return {
        ...state,
        email: action.payload
      }
    case SIGNUP_CHANGE_PASSWORD_TEXT:
      return {
        ...state,
        password: action.payload
      }
    case SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT:
      return {
        ...state,
        repeatPassword: action.payload
      }
  }
  return state
}
