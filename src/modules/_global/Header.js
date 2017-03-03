/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({ redirectToIndex }) => (
	<div className="header">
		<div className="header__logo">
			<i onClick={redirectToIndex} className="ion-ios-bolt-outline" />
		</div>
		<ul className="header__nav-list">
			<li className="header__nav-item">
				<Link to="/" className="header__nav-link" activeClassName="active-nav"> Persons</Link>
			</li>
		</ul>
	</div>
);

Header.propTypes = {
	redirectToIndex: PropTypes.func.isRequired
};


export default Header;
