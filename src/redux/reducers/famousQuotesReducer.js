import * as types from '../actions/actionTypes';
import { initialState } from '../../data/initialState';

const initialFamousPeopleQuotesState =
  initialState.famousQuotes.people;

const famousQuotesReducer = (state = initialFamousPeopleQuotesState, action) => {
  switch(action.type) {
    case types.FAMOUS_PEOPLE_QUOTES_SUCCESS:
      return Object.assign({}, state, {
        people: {
          message: 'Famous Quotes Loaded'
        }
      });

    case types.FAMOUS_PEOPLE_QUOTES_FAILURE:
      return Object.assign({}, state, {
        people: {
          message: 'Famous Quotes Not Loaded'
        }
      });

    default:
      return state;
  }
}

export default famousQuotesReducer;
