import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Profile(props) {
	return (
		
        <main role="main" className="profile hidden">
            <h1 aria-label="Welcome">Welcome, <span id="firstName">John!</span></h1>
            <h2 aria-label="Current Saved Trips">Current Saved Trips</h2>
            <ul id="tripList">
                <h3 id="noTrips" className="hidden">No trips created yet</h3>
            </ul>
            <button id="newTrip" type="button">Create new trip</button>       
        </main>
	)
}