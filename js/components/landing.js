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
                    <button id="signUp-button" type="button">Sign Up</button>
            </div>
            <div className="landingBottom">
                <h2>Features</h2>
                <ul className="landingList">
                        <li aria-label="Search for things to do" id="searchSample">Search for things to do</li>
                        <li aria-label="Add them to your Planner" id="addToPlannerSample">Add them to your planner</li>
                        <li aria-label="Make a packing list" id="packingListSample">Make a packing list</li>
                </ul>
                <video id="searchSampleVideo" className="hidden"  src="../../assets/stylesheets/images/activitySearchExample.mp4" controls></video>
                <video id="addToPlannerSampleVideo" className="hidden"  src="../../assets/stylesheets/images/addItemExample.mp4" controls></video> 
                <video id="packingListSampleVideo" className="hidden"  src="../../assets/stylesheets/images/packingListExample.mp4" controls></video>     
            </div>
    
        </main>
	)
}