import { combineReducers } from 'redux';
import persons from '~modules/persons/persons.reducer';

const rootReducer = combineReducers({
	persons
});

export default rootReducer;
