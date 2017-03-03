import axios from 'axios';
import * as types from '~const/actionTypes';
import * as api from '~const/api';

export function loadPersonsSuccess(res) {
	return { type: types.LOAD_PERSONS_SUCCESS, persons: res.data };
}

export function createPersonSuccess(person) {
	return { type: types.CREATE_PERSON_SUCCESS, person };
}

export function updatePersonSuccess(person) {
	return { type: types.UPDATE_PERSON_SUCCESS, person };
}

export function deletePersonSuccess(personId) {
	return { type: types.DELETE_PERSON_SUCCESS, personId };
}

export function loadPersons() {
	return function (dispatch) {
		return axios.get(`${api.URL}/persons?d=${new Date().getTime()}`)
			.then(res => {
				dispatch(loadPersonsSuccess(res));
			}).catch(error => {
				throw (error);
			});
	};
}

export function createPerson(person) {
	return function (dispatch) {
		return axios.post(`${api.URL}/persons`, person)
			.then(res => {
				dispatch(createPersonSuccess(person));
			}).catch(error => {
				throw (error);
			});
	};
}

export function updatePerson(person) {
	return function (dispatch) {
		return axios.put(`${api.URL}/persons/${person.id}`, person)
			.then(res => {
				dispatch(updatePersonSuccess(person));
			}).catch(error => {
				throw (error);
			});
	};
}

export function deletePerson(personId) {
	return function (dispatch) {
		return axios.delete(`${api.URL}/persons/${personId}`)
			.then(res => {
				dispatch(deletePersonSuccess(personId));
			}).catch(error => {
				throw (error);
			});
	};
}
