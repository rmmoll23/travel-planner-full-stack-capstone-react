import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function TripPlanner(props) {
	return (
		
        <main role="main" className="tripPlanner hidden">
            <h1 className="viewHeader"></h1>
            <p>Select a day to view more details</p><br />
            <div className="plannerDays">
                    
            </div>  

        </main>
	)
}