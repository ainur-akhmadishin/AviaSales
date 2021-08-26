import { combineReducers } from 'redux';
import ticketsReduser from './ticketsReduser';
import checkboxReduser from './checkboxReduser';
import sortReduser from './sortReduser';

const reducer = combineReducers({
  tickets: ticketsReduser,
  filters: checkboxReduser,
  sort: sortReduser,
});

export default reducer;
