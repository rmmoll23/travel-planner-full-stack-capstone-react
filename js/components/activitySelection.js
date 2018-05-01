import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function ActivitySelection(props) {
	return (
		
        <main role="main" className="activitySelection hidden">
            <h1 className="viewHeader"></h1>
            <h2 aria-label="5 day weather forecast">5 Day Weather Forecast</h2>
            <div className="weatherBar">
                    
            </div>
            <div className="searchContainers">
                    <div className="restaurantSearch">
                            <h2>Restaurants</h2>
                            <div aria-label="Restaurant search results in the area" className="restaurantContainer">
                                    
                            </div>
                    </div>
                    <div className="activitySearch">
                            <h2>Activities/Places to Stay</h2>
                            <div className="activityContainer">
                                    <label htmlFor="search"></label>
                                    <input name="search" id="activitySearch-input" type="text" aria-label="Enter what you would like to search for in this city" placeholder="search" required />
                                    <button id="activitySearch-button" type="submit">Search</button>
                                    <div aria-label="Activity search results in the area" aria-live="assertive" className="activityResultsContainer">
                                    <h2 className="searchMessage">Searching...</h2>

                                    </div>
                            </div>
                    </div>
                    <div className="hikeSearch">
                            <h2>Hiking Trails</h2>
                            <div aria-label="Hiking search results in the area" className="hikeContainer">
                                    
                            </div>
                    </div>
            </div>
            <button id="viewPlanner" className="button-left" type="button">View Trip Planner</button>
            <button id="createPackList" className="button-right" type="button">Create Packing List</button>
    </main >
	)
}