import { DATA_USER_TEXT, DATA_FILMS_TEXT, DATA_BLOCK_PLACE_TEXT } from './actions'

const defaultState = {
  dataUser: "",
  dataFilms: "",
  dataBlockPlace: ""
}

export const allDataReducer = ( state = defaultState, action ) => {
  switch (
    action.type
  ) {
    case DATA_USER_TEXT:
      return {
        ...state,
        dataUser: action.payload
      }
    case DATA_FILMS_TEXT:
      return {
        ...state,
        dataFilms: action.payload
      }
    case DATA_BLOCK_PLACE_TEXT:
      return {
        ...state,
        dataBlockPlace: action.payload
      }
  }
  return state
}
