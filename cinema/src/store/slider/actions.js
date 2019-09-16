export const DATA_USER_TEXT = 'DATA_USER_TEXT';
export const DATA_FILMS_TEXT = 'DATA_FILMS_TEXT';
export const DATA_BLOCK_PLACE_TEXT = 'DATA_BLOCK_PLACE_TEXT';


export const setDataUserText = dataUser => ({
  type: 'DATA_USER_TEXT',
  payload: dataUser
})

export const setDataFilmsText = dataFilms => ({
  type: 'DATA_FILMS_TEXT',
  payload: dataFilms
})

export const setDataBlockPlaceText = dataBlockPlace => ({
  type: 'DATA_BLOCK_PLACE_TEXT',
  payload: dataBlockPlace
})
