import React from 'react';
import {shallow, mount, render} from 'enzyme';

import TripPlanner from './tripPlanner';

describe('<TripPlanner />', () => {
	it('Renders without crashing', () => {
		shallow(<TripPlanner />);
	});
});