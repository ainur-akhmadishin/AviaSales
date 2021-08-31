import { combineReducers } from 'redux';
import ticketsReducer from './ticketsReducer';
import checkboxReducer from './checkboxReducer';
import sortReducer from './sortReducer';

const reducer = combineReducers({
  tickets: ticketsReducer,
  filters: checkboxReducer,
  sort: sortReducer,
});

export default reducer;
