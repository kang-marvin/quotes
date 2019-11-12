import * as types from '../actionTypes';

/** Redux Actions */

export const famousQuotesSuccess = responseObject => {
  return {
    type: types.FAMOUS_PEOPLE_QUOTES_SUCCESS,
    responseObject
  }
}

export const famousQuotesFailure = _ => {
  return {
    type: types.FAMOUS_PEOPLE_QUOTES_FAILURE
  }
}

/** API Calss */

export const loadFamousPeopleQuotes = _ => (dispatch) => {
  return dispatch(
    famousQuotesSuccess({})
  )
}
