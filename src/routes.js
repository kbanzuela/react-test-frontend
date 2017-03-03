import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Layout from '~modules/Layout';
import Persons from '~modules/persons/Persons';
import ManagePerson from '~modules/persons/ManagePerson';
import PageNotFound from '~modules/_global/PageNotFound';

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Persons} />
		<Route path="person" component={ManagePerson} />
		<Route path="person/:id" component={ManagePerson} />
		<Route path="page-not-found" component={PageNotFound} />
		<Redirect from="*" to="page-not-found" />
	</Route>
);
