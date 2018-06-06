import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Nav(props) {
	return (
		
        <nav role="navigation">
                <h1><img className="logo" src="assets/stylesheets/images/globeIcon.png" />&nbsp; &nbsp;Travel Planner</h1>
                <button id="logIn-button" type="button">Log In</button>
                <button id="signUpButtonNav" type="button">Sign Up</button>
                <ul className="navList hidden">
                    <li><a id="profileNav" className="links" href="#">Profile Page</a></li>
                    <li><a id="packingNav" className="links" href="#">Packing List</a></li>
                    <li><a id="plannerNav" className="links" href="#">Trip Planner</a></li>
                    <li><a id="activityNav" className="links" href="#">Activity Selection Page</a></li>
                </ul>
        </nav>
	)
}