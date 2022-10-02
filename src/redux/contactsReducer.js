import { combineReducers } from 'redux';

import items from './itemsSlice';
import filter from './filterSlice';

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
