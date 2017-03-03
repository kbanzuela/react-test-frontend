import * as types from '~const/actionTypes';
import initialState from '~reducers/initialState';

export default function (state = initialState.persons, action) {
	let index;

	switch (action.type) {

		case types.LOAD_PERSONS_SUCCESS:
			return action.persons;

		case types.CREATE_PERSON_SUCCESS:
			return [
				...state,
				Object.assign({}, action.person)
			];

		case types.UPDATE_PERSON_SUCCESS:
			return [
				...state.filter(person => person.id !== action.person.id),
				Object.assign({}, action.person)
			];

		case types.DELETE_PERSON_SUCCESS:
			index = state.findIndex(person => person.id === action.personId);
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];

		default:
			return state;
	}
}
