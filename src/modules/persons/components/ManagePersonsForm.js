import React from 'react';
import TextInput from '~global/forms/TextInput';

const ManagePersonForm = ({ person, onSave, onChange, saving, errors }) => (
	<div className="example">
		<h1 className="section-title">Create Person Form</h1>
		<form>
			<div className="form-group row">
				<div className="col-sm-10">
					<TextInput
						name="first_name"
						label="First name"
						value={person.first_name}
						onChange={onChange}
						error={errors.first_name}
					/>
				</div>
			</div>

			<div className="form-group row">
				<div className="col-sm-10">
					<TextInput
						name="last_name"
						label="Last Name"
						value={person.last_name}
						onChange={onChange}
						error={errors.last_name}
					/>
				</div>
			</div>


			<div className="form-group row">
				<div className="col-sm-10">
					<TextInput
						name="email"
						label="Email"
						value={person.email}
						onChange={onChange}
						error={errors.email}
					/>
				</div>
			</div>


			<div className="form-group row">
				<div className="col-sm-10">
					<TextInput
						name="contact_number"
						label="Contact Number"
						value={person.contact_number}
						onChange={onChange}
						error={errors.contact_number}
					/>
				</div>
			</div>


			<div className="form-group row">
				<div className="col-sm-12">
					<input
						type="submit"
						disabled={saving}
						value={saving ? 'Saving...' : 'Save'}
						className="btn btn-success pull-xs-right"
						onClick={onSave}
					/>
				</div>
			</div>
		</form>
	</div>
);

ManagePersonForm.propTypes = {
	person: React.PropTypes.object.isRequired,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	saving: React.PropTypes.bool,
	errors: React.PropTypes.object
};

export default ManagePersonForm;
