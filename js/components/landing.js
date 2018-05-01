import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Landing(props) {
	return (
		
        <main role="main" className="landing">
            <div className="landingTop">
                    <h2 aria-label="All of your traveling needs in one place" className="fadeOutHeader">All of your traveling needs in one place</h2>
            </div>
            <div className="landingBottom">
                    <h2>Features</h2>
                    <ul className="landingList">
                            <li aria-label="Search for things to do">Search for things to do</li>
                            <li aria-label="Add them to your Planner">Add them to your planner</li>
                            <li aria-label="Make a packing list">Make a packing list</li>
                    </ul>
                    <button id="signUp-button" className="button-left" type="button">Sign Up</button>
                    <button id="logIn-button" className="button-right" type="button">Log In</button>
            </div>
    
        </main>
	)
}