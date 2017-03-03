import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PersonsList = ({ persons, onDelete }) => (
	<div className="example">
		<div className="create-new-btn">
			<Link to="/person" className="btn btn-success pull-xs-right"> Create new</Link>
		</div>
		<h1 className="section-title"> Persons
			{!persons.length && <span className="no-content"> - No records found</span>}
		</h1>
		<div className="row example-persons">
			<table className="table table-responsive">
				<thead>
					<tr>
						<th> ID</th>
						<th> First Name</th>
						<th> Last Name</th>
						<th> Email</th>
						<th> Contact Number</th>
					</tr>
				</thead>
				<tbody>
					{persons.map(person =>
						<tr key={person.id}>
							<th scope="row">{person.id}</th>
							<td>{person.first_name}</td>
							<td>{person.last_name}</td>
							<td>{person.email}</td>
							<td>{person.contact_number}</td>
							<td width="17%">
								<Link to={`/person/${person.id}`} className="btn btn-link btn-sm">Edit</Link>
								<button className="btn btn-link btn-sm" onClick={onDelete.bind(this, person.id)}> Delete</button>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	</div>
);

PersonsList.propTypes = {
	persons: PropTypes.array.isRequired,
	onDelete: PropTypes.func
};

export default PersonsList;
