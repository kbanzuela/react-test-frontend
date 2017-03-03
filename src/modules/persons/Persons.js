/* eslint-disable no-console */
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import toastr from 'toastr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as personsActions from './persons.actions';
import PersonsList from './components/PersonsList';

class Persons extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		this.props.actions.loadPersons();
	}

	handleDelete(personId) {
		this.props.actions.deletePerson(personId);
		toastr.success(`Deleted`);
	}

	render() {
		const { persons } = this.props;
		return (
			<div>
				<DocumentTitle title="Example" />
				<PersonsList
					persons={persons}
					onDelete={this.handleDelete}
				/>
			</div>
		);
	}
}

Persons.propTypes = {
	persons: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		persons: state.persons
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(personsActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
