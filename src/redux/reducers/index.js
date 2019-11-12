import { combineReducers } from "redux";

import famousQuotes from './famousQuotesReducer';

const rootReducer = combineReducers({
  famousQuotes
});

export default rootReducer;
