import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function NewTrip(props) {
	return (
		
        <main role="main" className="newTrip hidden">
            <form>
                    <div className="container">
                        <h1>Create new trip</h1>

                        <label htmlFor="tripName">Name of trip</label>
                        <input aria-label="Enter name of trip" type="text" id="tripName" placeholder="Enter name of trip" name="tripName" required /><br /><br />

                        <label htmlFor="city">Location</label>
                        <input aria-label="Enter city of trip" type="text" id="tripLocation" placeholder="Enter city: 'Austin, TX' or 'London, UK'" name="city" required /><br /><br />
                        
                        <label htmlFor="from">Start Date</label>
                        <input aria-label="Enter start date of trip" type="text" id="from" name="from" placeholder="Enter trip start date" readOnly="true" /><br /><br />

                        <label htmlFor="to">End Date</label>
                        <input aria-label="Enter end date of trip"type="text" id="to" name="to" placeholder="Enter trip end date" readOnly="true" /><br /><br />

                        <button id="cancelTrip" className="button-left" type="button">Cancel</button>
                        <button id="createTrip" className="button-right" type="submit">Submit</button>
                    
                    </div>
            </form>
        </main>
	)
}