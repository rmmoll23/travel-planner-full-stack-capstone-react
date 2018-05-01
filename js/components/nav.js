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
                <ul className="navList-activity hidden">
                    <li><a id="profileNav-activity" href="#">Profile Page</a></li>
                    <li><a id="packingNav-activity" href="#">Packing List</a></li>
                    <li><a id="plannerNav-activity" href="#">Trip Planner</a></li>
                </ul> 
                <ul className="navList-planner hidden">
                    <li><a id="profileNav-planner" href="#">Profile Page</a></li>
                    <li><a id="packingNav-planner" href="#">Packing List</a></li>
                    <li><a id="activityNav-planner" href="#">Activity Selection Page</a></li>
                </ul>
                <ul className="navList-day hidden">
                    <li><a id="profileNav-day" href="#">Profile Page</a></li>
                    <li><a id="packingNav-day" href="#">Packing List</a></li>
                    <li><a id="plannerNav-day" href="#">Trip Planner</a></li>
                    <li><a id="activityNav-day" href="#">Activity Selection Page</a></li>
                </ul>
                <ul className="navList-packing hidden">
                    <li><a id="profileNav-packing" href="#">Profile Page</a></li>
                    <li><a id="plannerNav-packing" href="#">Trip Planner</a></li>
                    <li><a id="activityNav-packing" href="#">Activity Selection Page</a></li>
                </ul>   
        </nav>
	)
}