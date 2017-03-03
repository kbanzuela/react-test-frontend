import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import toastr from 'toastr';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as personsActions from './persons.actions';
import ManagePersonsForm from './components/ManagePersonsForm';

class ManagePerson extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			pageTitle: (this.props.params.id ? "Edit Person" : "Create Person"),
			person: Object.assign({}, props.person),
			errors: {},
			saving: false
		};

		this.handleInputState = this.handleInputState.bind(this);
		this.savePerson = this.savePerson.bind(this);
		this.personFormIsValid = this.personFormIsValid.bind(this);
	}

	componentDidMount() {
		this.props.actions.loadPersons();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.person.id !== nextProps.person.id) {
			this.setState({ person: Object.assign({}, nextProps.person) });
		}
	}

	handleInputState(event) {
		const field = event.target.name;
		let person = this.state.person; // eslint-disable-line
		person[field] = event.target.value;
		return this.setState({ person });
	}

	personFormIsValid() {
		let formIsValid = true;
		const errors = {};
		if (!this.state.person.first_name) {
			errors.first_name = 'First Name is required';
			formIsValid = false;
		}


		if (!this.state.person.last_name) {
			errors.last_name = 'Last Name is required';
			formIsValid = false;
		}

		this.setState({ errors });
		return formIsValid;
	}

	savePerson(event) {
		event.preventDefault();
		if (!this.personFormIsValid()) {
			return;
		}

		this.setState({ saving: true });

		if (this.state.person.id) {
			this.props.actions.updatePerson(this.state.person)
				.then(() => this.redirectToPersonsPage())
				.catch(error => {
					toastr.error(error);
					this.setState({ saving: false });
				});
		} else {
			this.props.actions.createPerson(this.state.person)
				.then(() => this.redirectToPersonsPage())
				.catch(error => {
					toastr.error(error);
					this.setState({ saving: false });
				});
		}
	}

	redirectToPersonsPage() {
		this.setState({ saving: false });
		toastr.success('Person Saved');
		browserHistory.push('/');
	}

	render() {
		return (
			<div>
				<DocumentTitle title={this.state.pageTitle} />
				<ManagePersonsForm
					onChange={this.handleInputState}
					onSave={this.savePerson}
					person={this.state.person}
					errors={this.state.errors}
					saving={this.state.saving}
				/>
			</div>
		);
	}
}

ManagePerson.propTypes = {
	person: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
	params: PropTypes.object
};

ManagePerson.contextTypes = {
	router: PropTypes.object.isRequired
};

function getPersonById(persons, id) {
	const person = persons.filter(person => person.id == id); // eslint-disable-line
	if (person) return person[0];
	return null;
}

function mapStateToProps(state, ownProps) {
	const personId = ownProps.params.id;
	let person = { id: '', first_name: '', last_name: '', email: '', contact_number: '' };

	if (personId && state.persons.length > 0) {
		person = getPersonById(state.persons, personId);
	}

	return { person };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(personsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePerson);
