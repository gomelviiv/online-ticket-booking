export const SIGNUP_CHANGE_EMAIL_TEXT = 'SIGNUP_CHANGE_EMAIL_TEXT'
export const SIGNUP_CHANGE_PASSWORD_TEXT = 'SIGNUP_CHANGE_PASSWORD_TEXT'
export const SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT = 'SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT'

export const setEmailText = email =>({
  type: 'SIGNUP_CHANGE_EMAIL_TEXT',
  payload: email,
})

export const setPasswordText = password =>({
  type: 'SIGNUP_CHANGE_PASSWORD_TEXT',
  payload: password
})

export const setRepeatPasswordText = repeatPassword =>({
  type: 'SIGNUP_CHANGE_REPEAT_PASSWORD_TEXT',
  payload: repeatPassword
})
